import express, { Request, Response } from 'express';
import signUp from '../Controllers/SignUp';
import Login from '../Controllers/Login';
import Products from '../Controllers/Product';
import LoginValidators from '../Validators/LoginValidators';
import { ValidationError } from 'express-validation';
import SignUpValidators from '../Validators/SignUpValidators';

const Router = express.Router();

Router.post("/login", LoginValidators, Login);
Router.post("/Signup", SignUpValidators, signUp);
Router.get("/products", Products);

Router.use((errors, request: Request, response: Response, next) => {
    let bodyErrors = [];
    if (errors instanceof ValidationError) {
        errors.details.body.map((error: any) => {
            bodyErrors.push(error.message);
        })
        return response.status(errors.statusCode).json({ success: false, validationErrors: bodyErrors });
    }
})

export default Router;