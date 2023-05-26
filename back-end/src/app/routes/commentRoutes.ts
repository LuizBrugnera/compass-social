const { Router } = require("express");

import { commentController } from "../controllers/commentController/commentController";
import { validateDataComment } from "../middlewares/commentMiddleware/commentMiddleware";
const commentRoutes = new Router();

commentRoutes.route("/posts/:postId/comments")
.post(validateDataComment, commentController.create)
.get(commentController.getAll)

commentRoutes.route("/posts/:postId/comments/:commentId")
.get(commentController.getOne)
.put(validateDataComment, commentController.update)
.delete(commentController.delete)

export default commentRoutes;