import { IComment, ILeanPost, IPost } from "../../interfaces/global.interfaces";
import { commentModel } from "../../models/Comment";
import { postModel } from "../../models/Post";
import { userModel } from "../../models/User";


export const postController = {
  create: async (req: any, res: any) => {
    try {
      const userResponse = await userModel.findById(req.body.user);

      if (!userResponse) return res.status(404).json({ msg: "User not found" });

      const post = {
        _id: req.body._id,
        user: req.body.user,
        post_date: req.body.post_date,
        description: req.body.description,
        likes: req.body.likes,
        url_imagem: req.body.url_imagem,
        comments: req.body.comments,
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
        post_date: req.body.post_date,
        description: req.body.description,
        likes: req.body.likes,
        url_imagem: req.body.url_imagem,
      };
      let response: IPost | null = await postModel
        .findByIdAndUpdate(id, post, {
          new: true,
        })
        .populate("user")
        .lean();

      if (!response) return res.status(404).json({ msg: "Post not found" });

      const comments: (IComment | null)[] = await Promise.all(
        response.comments.map((commentId: any) =>
          commentModel.findById(commentId).populate("user").lean()
        )
      );

      response.comments = comments.filter(
        (comment) => comment !== null
      ) as IComment[];

      res.status(200).json({ response, msg: "Post updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },

  getAll: async (req: any, res: any) => {
    try {
      let response: ILeanPost[] = await postModel.find().populate("user").lean();

      response = await Promise.all(response.map(async (post: ILeanPost) => {
        const comments: (IComment | null)[] = await Promise.all(
          post.comments.map((commentId: any) =>
            commentModel.findById(commentId).populate("user").lean()
          )
        );

        post.comments = comments.filter(comment => comment !== null) as IComment[];
        return post;
      }));

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
      let response: IPost | null = await postModel.findById(id).populate("user")
      .lean();

      if (!response) return res.status(404).json({ msg: "Post not found" });

      const comments: (IComment | null)[] = await Promise.all(
        response.comments.map((commentId: any) =>
          commentModel.findById(commentId).populate("user").lean()
        )
      );

      response.comments = comments.filter(
        (comment) => comment !== null
      ) as IComment[];

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
      const response = await postModel.findById(id).populate("user");
  
      if (!response) return res.status(404).json({ msg: "Post not found" });
  
      // Delete all comments associated with the post
      for (let commentId of response.comments) {
        await commentModel.findByIdAndDelete(commentId);
      }
  
      const deletePost = await postModel.findByIdAndDelete(id);
  
      res.status(200).json({
        response : deletePost,
        msg: "Post deleted successfully",
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
};

export default postController;
