import mongoose from "mongoose";
import { Request, Response } from "express";
import { commentModel } from "../../models/Comment";
import { postModel } from "../../models/Post";
import { userModel } from "../../models/User";


async function validateUser(userId: string): Promise<void> {
  const userExists = await userModel.exists({ _id: userId });

  if (!userExists) {
    throw new Error("User not found");
  }
}

export const postController = {
  create: async (req: Request, res: Response) => {
    try {
      await validateUser(req.body.user);
      req.body._id = new mongoose.Types.ObjectId();
      const post = await postModel.create(req.body);
      res.status(201).json({
        response: post,
        msg: "Post created successfully",
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const postId = req.params.id;

      const updatedPost = await postModel.findByIdAndUpdate(postId, req.body, {
        new: true,
      });

      if (!updatedPost) {
        res.status(404).json({ msg: "Post not found" });
        return;
      }

      res
        .status(200)
        .json({ response: updatedPost, msg: "Post updated successfully" });
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  getAll: async (req: Request, res: Response) => {
    try {
      const posts = await postModel.find();
      res
        .status(200)
        .json({ response: posts, msg: "Posts found successfully" });
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  getOne: async (req: Request, res: Response) => {
    try {
      const postId = req.params.id;
      const post = await postModel.findById(postId);

      if (!post) {
        res.status(404).json({ msg: "Post not found" });
        return;
      }

      res.status(200).json({ response: post, msg: "Post found successfully" });
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const postId = req.params.id;
      const postToDelete = await postModel.findById(postId);

      if (!postToDelete) {
        res.status(404).json({ msg: "Post not found" });
        return;
      }

      await Promise.all(
        postToDelete.comments.map((commentId) =>
          commentModel.findByIdAndDelete(commentId)
        )
      );

      await postModel.findByIdAndDelete(postId);
      res.status(204).json();
    } catch (error) {
      res.status(500).json({ error });
    }
  },
};

export default postController;
