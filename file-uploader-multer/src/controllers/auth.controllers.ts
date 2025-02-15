import { Request, Response } from 'express';
import pool from '../db/db';
import asyncHandler from '../utils/asyncHandler';
import uploadOnCloudinary from '../utils/cloudinary';

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
