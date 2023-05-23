import mongoose from "mongoose";

export const commentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    comment: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500,
    },
}, {
    timestamps: true,
});

export const commentModel = mongoose.model('Comment', commentSchema);