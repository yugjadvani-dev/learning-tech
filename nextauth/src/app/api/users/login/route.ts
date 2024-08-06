import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
    await dbConnect();

    try {
        const { email, password } = await request.json();

        // Check if use exist
        const user = await UserModel.findOne({ email });

        if (!user) {
            return NextResponse.json({
                error: "User with this email does not exist",
                status: 400
            });
        }

        // Check if password is correct
        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return NextResponse.json({
                error: "Incorrect Password",
                status: 400
            });
        }

        // Create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        };

        // Create token 
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: '1d' });

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        });
        response.cookies.set("token", token, {
            httpOnly: true,
        });
        return response;
    } catch (error: any) {
        console.error("Error registering user", error);
        return NextResponse.json({
            error: error.message,
            status: 500,
            success: false,
        });
    }
}