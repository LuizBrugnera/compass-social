import mongoose from "mongoose";
import { postModel } from "../../models/Post";

export const postController = {
  create: async (req: any, res: any) => {
    try {
      const post = {
        _id: new mongoose.Types.ObjectId(),
        user: req.body.user,
        birthdate: req.body.birthdate,
        email: req.body.email,
        password: req.body.password,
        profile_photo: req.body.profile_photo,
      };

      const response = await postModel.create(post);
      res.status(201).json({
        response,
        msg: "Post created successfully",
      });
    } catch (error) {
      res.status(500).json({ error: `error add - ${error}` });
    }
  },

  update: async (req: any, res: any) => {
    try {
      const id = req.params.id;
      const post = {
        name: req.body.name,
        user: req.body.user,
        birthdate: req.body.birthdate,
        email: req.body.email,
        password: req.body.password,
        profile_photo: req.body.profile_photo,
      };
      const response = await postModel.findByIdAndUpdate(id, post, { new: true });

      if (!response) return res.status(404).json({ msg: "Post not found" });

      res.status(200).json({ response, msg: "Post updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },

  getAll: async (req: any, res: any) => {
    try {
      const response = await postModel.find();
      res.status(200).json({
        response,
        msg: "Posts found successfully",
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  getOne: async (req: any, res: any) => {
    try {
      const id = req.params.id;
      const response = await postModel.findById(id);

      if (!response) return res.status(404).json({ msg: "Post not found" });

      res.status(201).json({
        response,
        msg: "Post found successfully",
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  delete: async (req: any, res: any) => {
    try {
      const id = req.params.id;
      const response = await postModel.findById(id);

      if (!response) return res.status(404).json({ msg: "Post not found" });

      const deletePost = await postModel.findByIdAndDelete(id);

      res.status(200).json({





        deletePost,
        msg: "User deleted successfully",
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
};

export default postController;
