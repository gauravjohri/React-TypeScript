import { Dispatch } from "redux";

export const DialogueAction = (action: boolean) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'DIALOGUE',
            action: action
        })
    }
}
