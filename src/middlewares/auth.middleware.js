import config from "../../config/config.js";
import User from "../models/user.js"
import JsonWebToken from "jsonwebtoken";

const jwtCheck = (req, res, next) => {
    return new Promise((resolve, reject)  => {
        if(req.headers && req.headers.authorization) {
            let { authorization } = req.headers
            let decoded;
            try {
                decoded =  JsonWebToken.verify(authorization, config.JWT_SECRET)
            } catch (err) {
                res.status(404).send({success: false, message: "Invalid Token"})
                return
            }
            let userId = decoded.userId
            User.findOne({ id: userId })
            .then((user) => {
                resolve(user)
                next()
            })
            .catch((err) => {
                res.status(404).send({success: false, message: "Token Error"})
            })
        }
        else {
            res.status(404).send({success: false, message: "No Token Found"})
        }
    })
}

export default jwtCheck;