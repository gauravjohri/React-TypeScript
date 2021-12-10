import { combineReducers } from "redux";
import DialogueReducer from "./DialogueReducer";
import loginReducer from "./loginReducer";
import { SignUpReducer } from "./SignUpReducer";


const allReducers = combineReducers({
    login: loginReducer,
    signup: SignUpReducer,
    dialogue: DialogueReducer
});

export default allReducers;