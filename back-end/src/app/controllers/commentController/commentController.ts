import mongoose from "mongoose";
import { commentModel } from "../../models/Comment";
import { postModel } from "../../models/Post";
import { userModel } from "../../models/User";
import { Request, Response } from "express";

type ErrorResponse = { msg: string };
const USER_NOT_FOUND: ErrorResponse = { msg: "User not found" };
const POST_NOT_FOUND: ErrorResponse = { msg: "Post not found" };
const COMMENT_NOT_FOUND: ErrorResponse = { msg: "Comment not found" };

async function fetchUser(userId: string) {
  const user = await userModel.findById(userId);
  if (!user) throw USER_NOT_FOUND;
  return user;
}

async function fetchPost(postId: string) {
  const post = await postModel.findById(postId);
  if (!post) throw POST_NOT_FOUND;
  return post;
}

export const commentController = {
  create: async (req: Request, res: Response) => {
    try {
      await fetchUser(req.body.user);

      const comment = new commentModel({
        _id: new mongoose.Types.ObjectId(),
        user: req.body.user,
        comment: req.body.comment,
      });
      const savedComment = await comment.save();

      const post = await fetchPost(req.params.postId);
      post.comments.push(savedComment._id);
      await post.save();

      const response = await commentModel.findById(savedComment._id);
      res.status(201).json({
        response,
        msg: "Comment created successfully",
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const comment = {
        comment: req.body.comment,
      };

      const updatedComment = await commentModel.findByIdAndUpdate(
        req.params.commentId,
        comment,
        { new: true }
      );
      if (!updatedComment) throw USER_NOT_FOUND;

      res
        .status(200)
        .json({ response: updatedComment, msg: "User updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },

  getAll: async (req: Request, res: Response) => {
    try {
      const post = await fetchPost(req.params.postId);

      const comments = await Promise.all(
        post.comments.map((commentId) =>
          commentModel.findById(commentId).lean()
        )
      );

      res
        .status(200)
        .json({ response: comments, msg: "Comments found successfully" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },

  getOne: async (req: Request, res: Response) => {
    try {
      const post = await fetchPost(req.params.postId);

      const comments = await Promise.all(
        post.comments.map((commentId) =>
          commentModel.findById(commentId).lean()
        )
      );
      const comment = comments.find(
        (comment) => comment && comment._id.toString() === req.params.commentId
      );
      if (!comment) throw COMMENT_NOT_FOUND;

      res
        .status(200)
        .json({ response: comment, msg: "Comment found successfully" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      await commentModel.findByIdAndDelete(req.params.commentId);

      const post = await fetchPost(req.params.postId);
      const commentIndex = post.comments.indexOf(req.params.commentId as any);
      if (commentIndex > -1) {
        post.comments.splice(commentIndex, 1);
        await post.save();
      }

      res.status(204).json();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
};

export default commentController;
