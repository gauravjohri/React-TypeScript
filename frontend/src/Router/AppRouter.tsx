import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "../Pages/Login"
import Logout from '../Pages/Logout';
import NavigationBar from '../Pages/PartialViews/NavigationBar';
import Products from "../Pages/Products"
import SignUp from "../Pages/SignUp";
import GuestRouterMiddleware from "./GuestRouterMiddleware";
import UserRouterMiddleware from './UserRouterMiddleware';

const AppRouter = () => {
    return (<Router>
        <NavigationBar />
        <Routes>
            <Route path='/' element={<GuestRouterMiddleware />}>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Route>
            <Route path="/" element={<UserRouterMiddleware />} >
                <Route path="/dashboard" element={<Products />} />
                <Route path="/logout" element={<Logout />} />
            </Route>
        </Routes>

    </Router>)
}
export default AppRouter;