

const initialState = { data: {} };
type stateInterface = (typeof initialState);
const loginReducer = (state: stateInterface = initialState, action: any) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                data: action.data
            }
            break;
        default:
            return state;
            break;
    }
}
export default loginReducer;