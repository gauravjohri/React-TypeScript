import { NextFunction, Request, Response } from "express";
import dotenv from 'dotenv';
dotenv.config();

const Interceptor = (request: Request, response: Response, next: NextFunction) => {
    let token = request.headers.authorization.replace('Bearer ', '');
    if (token != process.env.API_KEY) {
        throw new Error('Unauthorized!');
    }
    return next();
}

export default Interceptor;