import { Request, Response } from "express";
import { userModel } from "../../models/User";
import mongoose from "mongoose";

export const userController = {
  create: async (req: Request, res: Response) => {
    try {
      req.body._id = new mongoose.Types.ObjectId();
      const newUser = await userModel.create(req.body);
      res.status(201).json({
        response: newUser,
        msg: "User created successfully",
      });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const userId = req.params.id;
      const updatedUser = await userModel.findByIdAndUpdate(userId, req.body, {
        new: true,
      });

      if (!updatedUser) {
        res.status(404).json({ msg: "User not found" });
        return;
      }

      res
        .status(200)
        .json({ response: updatedUser, msg: "User updated successfully" });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  getAll: async (req: Request, res: Response) => {
    try {
      const users = await userModel.find();
      res
        .status(200)
        .json({ response: users, msg: "Users found successfully" });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  getOne: async (req: Request, res: Response) => {
    try {
      const userId = req.params.id;
      const user = await userModel.findById(userId);

      if (!user) {
        res.status(404).json({ msg: "User not found" });
        return;
      }

      res.status(200).json({ response: user, msg: "User found successfully" });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const userToDelete = await userModel.findById(userId);

        if (!userToDelete) {
            res.status(404).json({ msg: "User not found" });
            return;
        }

        await userToDelete.deleteOne();
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ error });
    }
},
};

export default userController;
