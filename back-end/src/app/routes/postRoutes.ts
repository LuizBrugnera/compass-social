const { Router } = require("express");

import { postController } from "../controllers/postController/postController";
import { validateDataPost } from "../middlewares/postMiddleware/postMiddleware";
import { securityController} from "../controllers/securityController/securityController";
const postRoutes = new Router();

postRoutes.route("/posts")
.post(securityController.checkJWT, validateDataPost, postController.create)
.get(securityController.checkJWT, postController.getAll)

postRoutes.route("/posts/:id")
.get(securityController.checkJWT, postController.getOne)
.put(securityController.checkJWT, validateDataPost, postController.update)
.delete(securityController.checkJWT, postController.delete)

export default postRoutes;