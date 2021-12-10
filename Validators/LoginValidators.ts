import { Joi, validate } from "express-validation";

const LoginValidators = validate({
    body: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
    }),
}, {}, {});

export default LoginValidators;