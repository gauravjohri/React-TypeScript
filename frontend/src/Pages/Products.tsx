import React, { useEffect, useState } from "react";
import { Context } from "../Context/Context";
import FetchRequest from "../Services/FetchRequest";
import AppDialogue from "./PartialViews/AppDialogue";
import AppTable from "./PartialViews/AppTable";
const Products = () => {

    const request = FetchRequest();
    const [product, setProduct] = useState([]);
    const [loader, setLoader] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [search, setSearch] = useState({ q: '' });

    const getProducts = async (page: number) => {
        let products = await request(`products?page=${page}`, 'GET');
        setPage(page);
        setTotalPages(products.totalPages);
        setTimeout(() => {
            setProduct(products.data);
            setLoader(false);
        }, 2000);
    }

    useEffect(() => {
        getProducts(1);
    }, [])

    return (
        <React.Fragment>
            <AppDialogue />

            <h2>Products</h2>
            <Context.Provider value={{ product, loader, page, search, totalPages, setProduct, setLoader, getProducts, setPage, setSearch, setTotalPages }}>
                <AppTable />
            </Context.Provider>
        </React.Fragment>
    )
}
export default Products;