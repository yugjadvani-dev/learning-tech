import { getDataFromToken } from "@/helpers/getDataFromToken";
import UserModel from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const userId = await getDataFromToken(request);
        const user = await UserModel.findOne({ _id: userId }).select("-password");
        return NextResponse.json({
            mesaaage: "User found",
            data: user
        });
    } catch (error: any) {
        return NextResponse.json({
            error: error.message,
            status: 400,
            success: false,
        });
    }
}