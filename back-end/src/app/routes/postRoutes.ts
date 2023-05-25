const { Router } = require("express");

import { postController } from "../controllers/postController/postController";
import { addDefaults } from "../middlewares/postMiddleware/postMiddleware";
const postRoutes = new Router();

postRoutes.route("/posts")
.post(addDefaults, postController.create)
.get(postController.getAll)

postRoutes.route("/posts/:id")
.get(postController.getOne)
.put(postController.update)
.delete(postController.delete)

export default postRoutes;