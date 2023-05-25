import userRoutes from "./userRoutes";
import postRoutes from "./postRoutes";
import commentRoutes from "./commentRoutes";

const { Router } = require("express");

const routes = new Router();

routes.use(userRoutes);
routes.use(postRoutes);
routes.use(commentRoutes);
export default routes;
