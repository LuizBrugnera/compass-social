const { Router } = require("express");

import { postController } from "../controllers/postController/postController";
import { validateDataPost } from "../middlewares/postMiddleware/postMiddleware";
const postRoutes = new Router();

postRoutes.route("/posts")
.post(validateDataPost, postController.create)
.get(postController.getAll)

postRoutes.route("/posts/:id")
.get(postController.getOne)
.put(validateDataPost, postController.update)
.delete(postController.delete)

export default postRoutes;