import { Alert } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import { ErrorMessage } from "../../Interfaces/ErrorMessage";

const SuccessMessage = () => {
    const context: ErrorMessage = useContext(Context);
    return (
        <div>
            {(context.success) && <Alert>{context.message}</Alert>}
        </div>
    )
}
export default SuccessMessage;