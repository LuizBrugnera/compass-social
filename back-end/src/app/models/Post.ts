import mongoose from "mongoose";

export const postSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    post_date: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500,
    },
    likes: {
        type: Number,
        required: true,
    },
    comments : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }],
}, {
    timestamps: true,
});

export const postModel = mongoose.model('Post', postSchema);