import { Router } from 'express';
import { createUser, signinUser } from "../validations/users.validations.js";
import jwtCheck from "../middlewares/auth.middleware.js";

const router = Router();
import validate from "../middlewares/validate.js"
import * as usersController from "../controllers/users.controller.js"

router.route("/signup").post(validate(createUser), usersController.createUser)  
router.route("/signin").post(jwtCheck, validate(signinUser), usersController.signinUser)  

export default router;