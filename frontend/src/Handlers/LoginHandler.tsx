import FetchRequest from "../Services/FetchRequest";
import { UserLogin } from "../Interfaces/UserLogin";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { login } from '../Actions/loginAction';


const LoginHandler = () => {
    const request = FetchRequest();
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const [user, setUser] = useState<UserLogin>({ username: '', password: '' });
    const [userData, setUserData] = useState({});


    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let userInfo: any = await request(`login`, 'POST', user);
        setUserData(userInfo);
        await dispatch(login(userInfo));
        if (userInfo.success) {
            localStorage.setItem('user', JSON.stringify(userInfo));
            setTimeout(() => {
                navigate("/dashboard");
            }, 2000);
        }
    }

    const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value });
    }
    return { handleLogin, handleLoginChange, userData }
}
export default LoginHandler;