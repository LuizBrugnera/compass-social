import mongoose from "mongoose";
import { commentModel } from "../../models/Comment";
import { postModel } from "../../models/Post";
import { IPost } from "../../interfaces/global.interfaces";

export const commentController = {
  create: async (req: any, res: any) => {
    try {
      const comment = new commentModel({
        _id: new mongoose.Types.ObjectId(),
        user: req.body.user,
        comment: req.body.comment,
      });
      const savedComment = await comment.save();

      const post = await postModel.findById(req.params.postId).populate('user');
      if (post) {
        post.comments.push(savedComment._id);
        await post.save();

        const response = await commentModel.findById(savedComment._id).populate('user');
        res.status(201).json({
          response,
          msg: "Comment created successfully",
        });
      } else {
        res.status(404).json({
          msg: "Post not found",
        });
      }
    } catch (error) {
      res.status(500).json({ error: `error add - ${error}` });
    }
  },

  update: async (req: any, res: any) => {
    try {
      const comment = {
        comment: req.body.comment,
      };

      const response = await commentModel.findByIdAndUpdate(
        req.params.commentId,
        comment,
        {
            new: true,
          }
      ).populate('user');
      if (!response) return res.status(404).json({ msg: "User not found" });
      res.status(200).json({ response, msg: "User updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },

  getAll: async (req: any, res: any) => {
    try {
      const post: IPost | null = await postModel.findById(req.params.postId).lean();
      if (!post) return res.status(404).json({ msg: "Post not found" });

      const response = await Promise.all(
        post.comments.map((commentId: any) =>
          commentModel.findById(commentId).populate('user').lean()
        )
      );

      res.status(200).json({
        response,
        msg: "Comments found successfully",
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  getOne: async (req: any, res: any) => {
    try {
        const post: IPost | null = await postModel.findById(req.params.postId).lean();
        if (!post) return res.status(404).json({ msg: "Post not found" });
  
        const comments = await Promise.all(
          post.comments.map((commentId: any) =>
            commentModel.findById(commentId).populate('user').lean()
          ));

      const comment = comments.find(
        (comment) => {
            
            if(comment)
            {
                return comment._id.toString() === req.params.commentId
            }
        }
      );

      if (!comment) return res.status(404).json({ msg: "Comment not found" });

      res.status(201).json({
        response : comment,
        msg: "Comment found successfully",
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  delete: async (req: any, res: any) => {
    try {
      const response = await commentModel.findById(req.params.commentId);
      if (!response) return res.status(404).json({ msg: "User not found" });

      const deleteComment = await commentModel.findByIdAndRemove(
        req.params.commentId
      ).populate('user');
      const post = await postModel.findById(req.params.postId);
      if (!post) return res.status(404).json({ msg: "Post not found" });

      const commentIndex = post.comments.indexOf(req.params.commentId);
      if (commentIndex > -1) {
        post.comments.splice(commentIndex, 1);
        await post.save();
      }
      res.status(200).json({
        response : deleteComment,
        msg: "Comment deleted successfully",
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
};

export default commentController;
