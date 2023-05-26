const { Router } = require("express");

import { commentController } from "../controllers/commentController/commentController";
import { validateDataComment } from "../middlewares/commentMiddleware/commentMiddleware";
import { securityController } from "../controllers/securityController/securityController";
const commentRoutes = new Router();

commentRoutes.route("/posts/:postId/comments")
.post(securityController.checkJWT, validateDataComment, commentController.create)
.get(securityController.checkJWT, commentController.getAll)

commentRoutes.route("/posts/:postId/comments/:commentId")
.get(securityController.checkJWT, commentController.getOne)
.put(securityController.checkJWT, validateDataComment, commentController.update)
.delete(securityController.checkJWT, commentController.delete)

export default commentRoutes;