import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as SignUpActionCreator from "../Actions/SignUpAction";
import { UserSignUp } from "../Interfaces/UserSignUp";
import FetchRequest from "../Services/FetchRequest";

const SignUpHandler = () => {
    const [user, setUser] = useState<UserSignUp>({ username: '', password: '', dob: new Date() });
    const request = FetchRequest();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { SignUpAction } = bindActionCreators(SignUpActionCreator, dispatch)
    const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let userInfo = await request(`Signup`, 'POST', user);
        SignUpAction(userInfo);
        if (userInfo.success) {
            setTimeout(() => {
                navigate("/")
            }, 2000)
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }
    return { handleChange, handleSignup }
}
export default SignUpHandler;