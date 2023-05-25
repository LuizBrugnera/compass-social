const { Router } = require("express");

import { userController } from "../controllers/userController/userController";

const userRoutes = new Router();

userRoutes.route("/users")
.post(userController.create)
.get(userController.getAll)

userRoutes.route("/users/:id")
.get(userController.getOne)
.put(userController.update)
.delete(userController.delete)

export default userRoutes;