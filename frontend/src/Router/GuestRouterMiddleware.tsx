import { Navigate, Outlet } from "react-router";
import { UserDataHandler } from "../Handlers/UserDataHandler";

const GuestRouterMiddleware = () => {
    const userInfo = UserDataHandler();
    let user: any = userInfo.success ? true : false;
    return (user && ["/", "/signup"].includes(window.location.pathname)) ? <Navigate to="/dashboard" /> : (<Outlet />);

};



export default GuestRouterMiddleware;