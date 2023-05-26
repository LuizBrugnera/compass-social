const { Router } = require("express");

import { userController } from "../controllers/userController/userController";
import { validateDataUser } from "../middlewares/userMiddleware/userMiddleware";

const userRoutes = new Router();

userRoutes.route("/users")
.post(validateDataUser, userController.create)
.get(userController.getAll)

userRoutes.route("/users/:id")
.get(userController.getOne)
.put(validateDataUser, userController.update)
.delete(userController.delete)

export default userRoutes;