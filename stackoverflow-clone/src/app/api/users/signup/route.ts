import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

export async function POST(request: NextRequest) {
    await dbConnect();

    try {
        const { username, email, password } = await request.json();

        // check if user already exists
        const user = await UserModel.findOne({ email });

        if (user) {
            return NextResponse.json({
                error: "User with this email already exists",
                status: 400
            });
        }

        // Hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new UserModel({
            username,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();
        console.log("savedUser", savedUser);

        // Send verification email
        await sendEmail({ email, emailType: 'VERIFY', userId: savedUser._id });

        return NextResponse.json({
            status: 201,  // Created status code,
            success: true,
            message: "User registered successfully. Please check your email for verification.",
            savedUser
        });

    } catch (error: any) {
        console.error("Error registering user", error);
        return NextResponse.json({
            error: error.message,
            status: 500,
            success: false,
        });
    }
}