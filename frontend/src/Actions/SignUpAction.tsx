import { Dispatch } from "redux"

export const SignUpAction = (user: object) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'SIGN_UP',
            user: user
        });
    }
}