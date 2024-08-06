import mongoose, { Document, Schema } from "mongoose";

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    isVerified: boolean;
    isAdmin: boolean;
    forgotPasswordToken: string;
    forgotPasswordTokenExpiry: Date;
    verifyToken: string;
    verifyTokenExpiry: Date | undefined;
}

const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: [8, "Password must be at least 8 characters long"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
});

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema);

export default UserModel;