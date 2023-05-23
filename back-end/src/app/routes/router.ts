import userRoutes from "./userRoutes";

const { Router } = require("express");

const routes = new Router();

routes.use(userRoutes);

export default routes;
