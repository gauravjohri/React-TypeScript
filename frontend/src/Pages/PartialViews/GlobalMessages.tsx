import { Context } from "../../Context/Context";
import Errors from "./Errors";
import FailureMessage from "./FailureMessage";
import SuccessMessage from "./SuccessMessage";

const GlobalMessages = (props: any) => {
    return (
        <div>
            <Context.Provider value={props.errors}>
                <Errors></Errors>
                <FailureMessage></FailureMessage>
                <SuccessMessage></SuccessMessage>
            </Context.Provider>
        </div>
    )
}
export default GlobalMessages;