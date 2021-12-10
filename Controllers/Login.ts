import axios from "axios"
import { Request, Response } from "express";
import Login from "../Interfaces/Login";
import User from "../Interfaces/User";
import dotenv from 'dotenv';
import validatePassword from "../HelperClasses/ValidateHash";
import HashGenerate from "../HelperClasses/HashGenerate";
dotenv.config();

const Login = async (request: Request, response: Response) => {
    let userData: Login = request.body;
    try {
        let user = await axios.get(`${process.env.DB_SERVER}:${process.env.DB_PORT}/users?username=${userData.username}`);
        let userResponse: User[] = await user.data;

        // validating user password
        let userPassword = userResponse[0].password;
        let userPasswordString = new validatePassword(`${userPassword}`, userData.password);
        let validatePasswordString = await userPasswordString.validatePassword();

        if (!validatePasswordString) {
            return response.status(401).json({ success: false, message: 'wrong password' });
        }

        if (userResponse.length == 0) {
            return response.status(401).json({ success: true, message: 'Unathorised' });
        }

        let userToken = new HashGenerate();
        let token = await userToken.generateUserToken(userResponse[0]);
        return response.status(200).json({ success: true, data: userResponse, token: token, message: 'Login successful. Redirecting in few seconds...' });
    } catch (error) {
        return response.status(401).json({ success: false, message: 'Unathorised' });
    }
}

export default Login;