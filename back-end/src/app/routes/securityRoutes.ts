const { Router } = require("express");

import { securityController} from "../controllers/securityController/securityController";
const securityRoutes = new Router();

securityRoutes.route("/login")
.post(securityController.login)

export default securityRoutes;