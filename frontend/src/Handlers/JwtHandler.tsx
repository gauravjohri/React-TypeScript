import jwt from "jsonwebtoken";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const JwtHandler = () => {
    const navigate = useNavigate();
    const loginState = useSelector((state: any) => state.login)
    const data = loginState;
    const decodeJwtAndShowDialogue = async () => {
        //console.log(loginState);
        //setInterval(async () => {


        try {
            let json: any = localStorage.getItem('user');
            let user: any = JSON.parse(json);
            await jwt.verify(user.token, 'token');
        }
        catch (error: any) {
            localStorage.removeItem('user');
            let currentUrl: string = window.location.pathname.replaceAll('/', '');
            if ((localStorage.getItem('user') === null && !["", "signup"].includes(currentUrl))) {
                alert("You're auto logged out after 2 minutes. Redirecting you to login page");
                navigate("/")
            }
        }
        // }, 2000)


    }
    return { decodeJwtAndShowDialogue }
}
export default JwtHandler;