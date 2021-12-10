import { Alert } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import { ErrorMessage } from "../../Interfaces/ErrorMessage";


const FailureMessage = () => {
    const context: ErrorMessage = useContext(Context);
    return (
        <div>
            {(!context.success && context.message) && <Alert severity='warning'>{context.message}</Alert>}
        </div>
    )
}
export default FailureMessage;