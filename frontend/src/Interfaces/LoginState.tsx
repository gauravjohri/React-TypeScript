
export interface LoginState {
    login: {
        user: {
            success: boolean,
            data: [{
                username: string,
                password: string,
                dob: Date
            }]
        }
    }
}