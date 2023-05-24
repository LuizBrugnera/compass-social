import mongoose from "mongoose";

export const addDefaults = (req : any, res : any, next : any) => {
    req.body._id = new mongoose.Types.ObjectId()
    req.body.likes = 0;
    req.body.comments = [];
    req.body.post_date = new Date();
    next();
  };