import mongoose from "mongoose";
import { postModel } from "./Post";
import { commentModel } from "./Comment";

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
        maxlength: 200,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        maxlength: 200,
    },
    profile_photo: {
        type: String,
        trim: true,
        maxlength: 1500,
    },
}, {
    timestamps: true,
});

userSchema.pre('deleteOne', { document: true, query: false }, async function(next) {
    try {
        await postModel.deleteMany({ user: this._id }).exec();
        // delete user's comments
        await commentModel.deleteMany({ user: this._id }).exec();
        next();
    } catch(err : any) {
        next(err);
    }
});

export const userModel = mongoose.model('User', userSchema);