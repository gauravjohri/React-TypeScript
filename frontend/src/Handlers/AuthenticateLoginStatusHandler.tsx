const AuthenticateLoginStatusHandler = () => {
    const checkIfUserLoggedIn = () => {
        if (localStorage.getItem('user') !== null) {
            return true;
        }
        return false;
    }
    return { checkIfUserLoggedIn }
}
export default AuthenticateLoginStatusHandler;