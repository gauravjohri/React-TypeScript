const DialogueReducer = (state: boolean = false, payload: any) => {
    switch (payload.type) {
        case 'DIALOGUE':
            return state = payload.action;
            break;
        default:
            return state;
            break;
    }
}
export default DialogueReducer;