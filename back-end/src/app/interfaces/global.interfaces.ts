import mongoose from "mongoose";

export interface IComment {
  _id: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  comment: string;
}

export interface IPost {
  _id: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  post_date: Date;
  description: string;
  likes: number;
  url_imagem: string;
  comments: mongoose.Types.ObjectId[] | IComment[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ILeanPost {
    _id: mongoose.Types.ObjectId;
    user: mongoose.Types.ObjectId;
    post_date: Date;
    description: string;
    likes: number;
    url_imagem: string;
    comments: IComment[];
    createdAt?: Date;
    updatedAt?: Date;
  }