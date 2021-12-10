import jwt from "jsonwebtoken";
class HashGenerate {
    private password: String;
    constructor(password?) {
        this.password = password;
    }
    hashGenerate = async () => {
        let token = jwt.sign({ password: this.password }, 'user_password');
        return token;
    }
    generateUserToken = async (user) => {
        let token = jwt.sign(user, 'token', { expiresIn: '2m' });
        return token;
    }
}
export default HashGenerate;