import UserModel from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {token} = reqBody;

        const user = await UserModel.findOne({verifyToken:token,verifyTokenExpiry: {$gt: Date.now()}})

        if (!user) {
            return NextResponse.json({ error: "Invalid token" }, { status: 400 })
        }

        user.isVerified = true;
        user.verifyToken = '';
        user.verifyTokenExpiry = undefined;
        await user.save();

        return NextResponse.json({
            message: "Email verified successfully",
            success: true
        })
    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}