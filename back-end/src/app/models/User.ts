import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
    },
    user: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
        unique: true,
    },
    birthdate: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
    },
    profile_photo: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1000,
    },
}, {
    timestamps: true,
});

export const userModel = mongoose.model('User', userSchema);