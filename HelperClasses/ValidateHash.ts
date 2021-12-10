import jwt from "jsonwebtoken";
class ValidateHash {
    private token;
    private password;
    constructor(token, password) {
        this.password = password;
        this.token = token;
    }
    validatePassword = async () => {
        let decoded = await jwt.verify(this.token, 'user_password');
        return this.password === decoded.password;
    }
}
export default ValidateHash;