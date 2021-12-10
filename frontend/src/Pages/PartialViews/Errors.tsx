import { Alert } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import { ValidationInterface } from "../../Interfaces/ValidationInterface";

const Errors = () => {
    const context: ValidationInterface = useContext(Context);
    let errors = context.validationErrors || [];
    return (
        <div>
            {errors.map((error: any, index: any) => (
                <Alert key={index} severity="error">{error}</Alert>
            ))}
        </div>
    )
}
export default Errors;