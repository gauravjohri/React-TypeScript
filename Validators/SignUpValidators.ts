import { Joi, validate } from "express-validation";

const SignUpValidators = validate({
    body: Joi.object({
        username: Joi.string().required(),
        dob: Joi.date().required(),
        password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
    }),
}, {}, {});

export default SignUpValidators;