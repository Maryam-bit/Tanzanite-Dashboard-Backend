import User from "../models/user.js";
import JsonWebToken from 'jsonwebtoken';
import config from '../../config/config.js';
import Bcrypt from "bcryptjs"

export const createUser = async (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: Bcrypt.hashSync(req.body.password , 10)
    });
    try {
        await user.save();
        const token = JsonWebToken.sign({id: user.id, email: user.email}, config.JWT_SECRET)

        res.send({success: true, token: token})
    } catch (err) {
        res.status(400).send(err);
    }
}

export const signinUser = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email})
        if(!user) res.status(400).send("User does not exists");
        else {
            if(!req.body.password == user.password)
                res.status(400).send("wrong password");
            else {
                const token = JsonWebToken.sign({id: user.id, email: user.email}, config.JWT_SECRET)
                res.status(200).send({success: true, token: token})
            }
        }
    } catch (err) {
     res.status(400).send(err)
    }
}