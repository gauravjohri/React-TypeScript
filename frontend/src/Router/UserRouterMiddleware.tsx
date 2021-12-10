import { Navigate, Outlet } from "react-router";
import { UserDataHandler } from "../Handlers/UserDataHandler";

const UserRouterMiddleware = () => {
    const userInfo = UserDataHandler();
    let user: any = userInfo.success ? true : false;
    return (!user && window.location.pathname !== "/") ? <Navigate to="/" /> : (<Outlet />);

}
export default UserRouterMiddleware;