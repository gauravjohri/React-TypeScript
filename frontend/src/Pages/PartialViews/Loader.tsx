import { CircularProgress } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import { LoaderInterface } from "../../Interfaces/LoaderInterface";

const Loader = () => {
    const loader: LoaderInterface = useContext(Context);
    return (
        <React.Fragment>
            {loader.loader && <span style={{ position: "absolute", left: '46%' }}> {<CircularProgress />}</span>}
        </React.Fragment>
    )
}
export default Loader;