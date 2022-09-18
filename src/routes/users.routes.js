import { Router } from 'express';
import User from '../models/user.js';
import * as UsersValidation from "../validations/users.validations.js";
import Joi from "joi"
const router = Router();

router.route("/signup").post((req, res) => {
    console.log(UsersValidation.createUser)
    UsersValidation.createUser.validate(req.body)
})  

export default router;