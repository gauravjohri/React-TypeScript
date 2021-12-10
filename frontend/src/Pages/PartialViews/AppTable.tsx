import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import { ProductInterface } from "../../Interfaces/ProductInterface";
import AppPagination from "./AppPagination";
import Loader from "./Loader";
import Search from "./Search";
const AppTable = () => {
    const context: any = useContext(Context);
    return (
        <React.Fragment>
            <TableContainer component={Paper}>
                <Search />
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Sr No.</TableCell>
                            <TableCell align="center">Image</TableCell>
                            <TableCell align="center">Title</TableCell>
                            <TableCell align="center">Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {context.product.map((productElement: ProductInterface, index: number) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell align="center">1</TableCell>
                                <TableCell align="center">No Image</TableCell>
                                <TableCell align="center">{productElement.title}</TableCell>
                                <TableCell align="center">{productElement.description}</TableCell>
                            </TableRow>
                        )
                        )}
                    </TableBody>
                </Table>
                {(context.product.length == 0 && !context.loader) && <p style={{ marginLeft: '45%' }}>No Product</p>}
                <AppPagination />
                <Loader />
            </TableContainer>
        </React.Fragment >
    )
}
export default AppTable;