import { Pagination } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import PaginationHandler from "../../Handlers/PaginationHandler";

const AppPagination = () => {
    const context: any = useContext(Context);
    const { page, handlePage } = PaginationHandler();
    return (
        <React.Fragment>
            {!context.loader && <Pagination page={context.page} onChange={handlePage} count={context.totalPages} />}
        </React.Fragment>
    )
}
export default AppPagination;