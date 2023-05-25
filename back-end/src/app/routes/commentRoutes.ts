const { Router } = require("express");

import { commentController } from "../controllers/commentController/commentController";
const commentRoutes = new Router();

commentRoutes.route("/posts/:postId/comments")
.post(commentController.create)
.get(commentController.getAll)

commentRoutes.route("/posts/:postId/comments/:commentId")
.get(commentController.getOne)
.put(commentController.update)
.delete(commentController.delete)

export default commentRoutes;