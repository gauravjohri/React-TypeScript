import axios from "axios";
import { Request, Response } from "express";
import User from "../Interfaces/User";
import dotenv from 'dotenv';
import HashGenerate from "../HelperClasses/HashGenerate";
dotenv.config();
const url = `${process.env.DB_SERVER}:${process.env.DB_PORT}/users`;
const SignUp = async (request: Request, response: Response) => {
    let userBody: User = request.body;

    //generating user password hash from request body password
    let hashGenerator = new HashGenerate(`${userBody.password}`);
    let hash = await hashGenerator.hashGenerate();
    userBody.password = hash;

    try {
        let checkUser = await axios.get(`${url}?username=${userBody.username}`);
        let userInfo: User[] = await checkUser.data;
        if (userInfo.length) {
            return response.status(403).json({ success: false, message: 'User already exists!' });
        }
        await axios.post(`${url}`, userBody);
        return response.status(201).json({ success: true, message: 'Registered successfully. Redirecting in few seconds...' });
    } catch (error) {
        return response.status(401).json({ success: false, message: 'Unauthenticated!' });
    }
};

export default SignUp;