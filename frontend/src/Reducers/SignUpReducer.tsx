const initialState: any = { user: {} }
export const SignUpReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SIGN_UP':
            return {
                ...state,
                user: action.user
            }
            break;
        default:
            return state;
            break;
    }
}