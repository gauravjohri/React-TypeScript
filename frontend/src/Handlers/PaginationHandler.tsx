import { useContext, useState } from "react";
import { Context } from "../Context/Context";
import FetchRequest from "../Services/FetchRequest";

const PaginationHandler = () => {

    const context: any = useContext(Context);
    const [page, setPage] = useState<number>(1);
    const request = FetchRequest();

    const handlePage = async (event: React.ChangeEvent<unknown>, page: number) => {

        event.preventDefault();
        context.setLoader(true);

        let search = (context.search.q) ? `q=${context.search.q}` : ``;
        let productsData = await request(`products?${search}&page=${page}`);

        context.setProduct([]);
        context.setPage(page);
        context.setTotalPages(productsData.totalPages);

        setTimeout(() => {
            context.setProduct(productsData.data);
            context.setLoader(false);
            setPage(page);
        }, 2000);

    }

    return { page, handlePage };
}
export default PaginationHandler;