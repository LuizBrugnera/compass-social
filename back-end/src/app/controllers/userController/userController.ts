import mongoose from "mongoose";
import { userModel } from "../../models/User";

export const userController = {
  create: async (req: any, res: any) => {
    try {
      const user = {
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        user: req.body.user,
        birthdate: req.body.birthdate,
        email: req.body.email,
        password: req.body.password,
        profile_photo: req.body.profile_photo || "",
      };

      const response = await userModel.create(user);
      res.status(201).json({
        response,
        msg: "User created successfully",
      });
    } catch (error) {
      res.status(500).json({ error: `error add - ${error}` });
    }
  },

  update: async (req: any, res: any) => {
    try {
      const id = req.params.id;
      const user = {
        name: req.body.name,
        user: req.body.user,
        birthdate: req.body.birthdate,
        email: req.body.email,
        password: req.body.password,
        profile_photo: req.body.profile_photo,
      };
      const response = await userModel.findByIdAndUpdate(id, user, { new: true });
      if (!response) return res.status(404).json({ msg: "User not found" });

      res.status(200).json({ response, msg: "User updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },

  getAll: async (req: any, res: any) => {
    try {
      const response = await userModel.find();
      res.status(200).json({
        response,
        msg: "Users found successfully",
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  getOne: async (req: any, res: any) => {
    try {
      const id = req.params.id;
      const response = await userModel.findById(id);

      if (!response) return res.status(404).json({ msg: "User not found" });

      res.status(201).json({
        response,
        msg: "User found successfully",
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  delete: async (req: any, res: any) => {
    try {
      const id = req.params.id;
      const response = await userModel.findById(id);

      if (!response) return res.status(404).json({ msg: "User not found" });

      const deleteUser = await userModel.findByIdAndDelete(id);

      res.status(200).json({
        response : deleteUser,
        msg: "User deleted successfully",
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
};

export default userController;
