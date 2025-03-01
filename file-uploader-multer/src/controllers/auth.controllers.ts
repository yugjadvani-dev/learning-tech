import { Request, Response } from 'express';
import pool from '../db/db';
import asyncHandler from '../utils/asyncHandler';
import uploadOnCloudinary, { cloudinaryFolderName } from '../utils/cloudinary';
import { v2 as cloudinary } from 'cloudinary';
import { validateRequiredFields } from '../utils/validateRequiredFields';
import { sendResponse } from '../utils/ApiResponse';
import { handleError } from '../utils/ApiError';

/**
 * Extracts and processes avatar identifier from Cloudinary URL
 * @param existingAvatarUrl - Full Cloudinary URL of the avatar
 * @returns Promise resolving to avatar identifier or null if URL is invalid
 */
const handleAvatarOperations = async (existingAvatarUrl: string | null): Promise<string | null> => {
    if (!existingAvatarUrl) return null;
    const avatarParts = existingAvatarUrl.split('ryde-uber-clone/');
    if (avatarParts.length > 1) {
        return avatarParts[1].split('.')[0];
    }
    return null;
};

/**
 * Register a new user
 * @route POST /api/auth/sign-up
 * @param {Request} req - Express request object containing user registration data
 * @param {Response} res - Express response object
 * @throws {ApiError} If registration fails
 */
export const signUp = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
        res.status(400).json({ message: 'All fields are required' });
    }

    // Check if user already exists
    const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (userExists.rows.length > 0) {
        res.status(409).json({
            success: false,
            message: 'User already exists',
        });
        return;
    }

    // Upload avatar
    const avatarPath = req.file?.path;

    let avatar = null;
    if (avatarPath) {
        avatar = await uploadOnCloudinary(avatarPath);
    }

    // Make sure you bcrypt the password before saving in Database
    const newUser = await pool.query(
        'INSERT INTO users (firstname, lastname, email, password, avatar) VALUES ($1, $2, $3, $4, $5) RETURNING id, email, firstname, lastname, avatar',
        [firstname, lastname, email, password, avatar]
    );

    res.status(201).json({
        success: true,
        message: 'User signed up successfully',
        user: newUser.rows[0],
    });
});

/**
 * Updates user profile information
 * @route PUT /api/users/:id
 * @body firstname - User's first name
 * @body lastname - User's last name
 * @body phone_number - User's phone number (optional)
 * @body avatar - User's profile picture (optional, file upload)
 * @access Private
 * @param req
 * @param res
 */
export const updateProfileById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { firstname, lastname, phone_number } = req.body;

        // Validate required fields
        const validation = validateRequiredFields({ id, firstname, lastname });
        if (!validation.isValid) {
            sendResponse(res, 400, {}, validation.error || 'Required fields are missing');
            return;
        }

        // Check if profile exists
        const existProfile = await pool.query(
            `SELECT id, avatar, firstname, lastname, email, phone_number, is_verified, created_at 
       FROM users 
       WHERE id = $1 LIMIT 1`,
            [id],
        );

        if (existProfile.rowCount === 0) {
            sendResponse(res, 404, {}, 'Profile not found');
            return;
        }

        // Handle avatar update if new file is uploaded
        const existingAvatarUrl = existProfile.rows[0].avatar;
        const existAvatar = await handleAvatarOperations(existingAvatarUrl);

        const avatarLocalPath = req.file?.path;
        let avatar = existingAvatarUrl;

        if (avatarLocalPath) {
            // Delete existing avatar from Cloudinary if it exists
            if (existAvatar) {
                await cloudinary.uploader
                    .destroy(`${cloudinaryFolderName}/${existAvatar}`, { invalidate: true })
                    .then((result) => console.log(result));
            }
            // Upload new avatar
            avatar = await uploadOnCloudinary(avatarLocalPath);
        }

        // Update user profile in database
        const profile = await pool.query(
            `UPDATE users 
       SET firstname = $1, lastname = $2, phone_number = $3, avatar = $4 
       WHERE id = $5 
       RETURNING id, avatar, firstname, lastname, email, phone_number, is_verified, created_at`,
            [firstname, lastname, phone_number, avatar, id],
        );

        sendResponse(res, 200, profile.rows[0], 'Profile updated successfully');
    } catch (error) {
        handleError(res, error, 'Something went wrong while updating the user details');
    }
};

/**
 * Deletes a user profile and associated resources
 * @route DELETE /api/users/:id
 * @param req
 * @param res
 */
export const deleteProfileById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const validation = validateRequiredFields({ id });
        if (!validation.isValid) {
            sendResponse(res, 400, {}, validation.error || 'User ID is required');
            return;
        }

        // Check if profile exists
        const existProfile = await pool.query(
            `SELECT id, avatar, firstname, lastname, email, phone_number, is_verified, created_at 
       FROM users 
       WHERE id = $1 LIMIT 1`,
            [id],
        );

        if (existProfile.rowCount === 0) {
            sendResponse(res, 404, {}, 'Profile not found');
            return;
        }

        // Handle avatar deletion
        const existingAvatarUrl = existProfile.rows[0].avatar;
        const existAvatar = await handleAvatarOperations(existingAvatarUrl);

        try {
            // Delete avatar from Cloudinary if it exists
            if (existAvatar) {
                await cloudinary.uploader
                    .destroy(`${cloudinaryFolderName}/${existAvatar}`, { invalidate: true })
                    .then((result) => console.log(result));
            }

            // Delete user from database
            await pool.query('DELETE FROM users WHERE id = $1', [id]);
        } catch (error) {
            handleError(res, error, 'Error deleting user resources');
            return;
        }

        sendResponse(res, 200, existProfile.rows[0], 'Profile deleted successfully');
    } catch (error) {
        handleError(res, error, 'Something went wrong while deleting profile');
    }
};