import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Actions/loginAction";

const Logout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(login({}));
        localStorage.removeItem('user');
    }, [])
    return (
        <React.Fragment>
            <h2>Redirecting you to home page in few seconds...</h2>
        </React.Fragment>
    )

}
export default Logout;