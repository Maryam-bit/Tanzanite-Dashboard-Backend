import User from "../models/user.js";


export const createUser = async (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password 
    });
    try {
        const saveUser = await user.save();
        res.send(saveUser)
    } catch (err) {
        res.status(400).send(err);
    }

}