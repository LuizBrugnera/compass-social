import { postModel } from "../../models/Post";

export const postController = {
  create: async (req: any, res: any) => {
    try {
      const post = {
        _id : req.body._id,
        user: req.body.user,
        post_date: req.body.post_date,
        description: req.body.description,
        likes: req.body.likes,
        url_imagem: req.body.url_imagem,
        comments : req.body.comments,
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
      const response = await postModel.findByIdAndUpdate(id, post, {
        new: true,
      });

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
        msg: "Post deleted successfully",
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
};

export default postController;
