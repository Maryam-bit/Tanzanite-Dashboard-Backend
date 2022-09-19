import { Router } from 'express';
import { createUser } from "../validations/users.validations.js";
const router = Router();
import validate from "../middlewares/validate.js"
import * as usersController from "../controllers/users.controller.js"

router.route("/signup").post(validate(createUser), usersController.createUser)  

export default router;