const { Router } = require("express");

import { userController } from "../controllers/userController/userController";
import { validateDataUser } from "../middlewares/userMiddleware/userMiddleware";
import { securityController } from "../controllers/securityController/securityController";
const userRoutes = new Router();

userRoutes.route("/users")
.post(validateDataUser, userController.create)
.get(securityController.checkJWT, userController.getAll)

userRoutes.route("/users/:id")
.get(securityController.checkJWT, userController.getOne)
.put(securityController.checkJWT, validateDataUser, userController.update)
.delete(securityController.checkJWT, userController.delete)

export default userRoutes;