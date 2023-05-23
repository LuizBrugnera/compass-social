const { Router } = require("express");

import { userController } from "../controllers/userController/userController";

const userRoutes = new Router();

userRoutes.route("/user")
.post(userController.create)
.get(userController.getAll)

userRoutes.route("/user/:id")
.get(userController.getOne)
.put(userController.update)
.delete(userController.delete)

export default userRoutes;