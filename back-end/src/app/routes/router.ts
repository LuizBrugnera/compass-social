import userRoutes from "./userRoutes";
import postRoutes from "./postRoutes";
import commentRoutes from "./commentRoutes";
import securityRoutes from "./securityRoutes";
const { Router } = require("express");

const routes = new Router();

routes.use(userRoutes);
routes.use(postRoutes);
routes.use(commentRoutes);
routes.use(securityRoutes);

export default routes;
