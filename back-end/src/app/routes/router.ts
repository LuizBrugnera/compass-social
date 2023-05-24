import userRoutes from "./userRoutes";
import postRoutes from "./postRoutes";

const { Router } = require("express");

const routes = new Router();

routes.use(userRoutes);
routes.use(postRoutes)
export default routes;
