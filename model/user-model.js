import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    // Corrected to snake_case to match your database
    first_name: {
        required: true,
        type: String,
    },
    // Corrected to snake_case
    last_name: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    phone: {
        required: true,
        type: String,
    },
    role: {
        required: true,
        type: String,
    },
    bio: {
        required: false,
        type: String,
    },
    social_media: { // Corrected to snake_case
        required: false,
        type: Object,
    },
    // Corrected to snake_case
    profile_picture: {
        required: false,
        type: String,
    },
});

export const User = mongoose.models.User ?? mongoose.model("User", userSchema);