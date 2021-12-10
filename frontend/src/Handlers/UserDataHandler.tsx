import { useSelector } from "react-redux";

export const UserDataHandler = () => {
    const loginState = useSelector((state: any) => state.login);
    let user: any = (Object.keys(loginState.data).length == 0) ? JSON.parse(localStorage.getItem('user') || '{}' as any) : loginState.data;
    return user;
}
