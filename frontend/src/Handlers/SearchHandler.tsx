import { useContext } from "react";
import { Context } from "../Context/Context";
import FetchRequest from "../Services/FetchRequest";

const SearchHandler = () => {

    const context: any = useContext(Context);
    const request = FetchRequest();

    const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (context.search.q) {
            context.setLoader(true);

            let page = (context.search.q) ? 1 : context.page;
            context.setPage(page);

            let productsData = await request(`products?q=${context.search.q}&page=${page}`);
            context.setProduct([]);
            context.setTotalPages(productsData.totalPages);

            setTimeout(() => {
                context.setProduct(productsData.data);
                context.setLoader(false);
            }, 2000);
        }
    }

    const resetSearch = () => {
        if (context.search.q) {
            context.setLoader(true);
            context.setSearch({ q: '' });
            context.setProduct([]);
            context.getProducts(1);
            setTimeout(() => {
                context.setPage(1);
                context.setLoader(false);
            }, 2000);
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = event.target;
        context.setSearch({ ...context.search, [name]: value });

    }
    return { handleChange, handleSearch, resetSearch };
}
export default SearchHandler;