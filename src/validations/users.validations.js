import Joi from "joi";

export const createUser = {
    body: Joi.object({
        id: Joi.string(),
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    })
} 

export const signinUser = {
    body: Joi.object({
        id: Joi.string(),
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    })
} 