import { Button, TextField } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import SearchHandler from "../../Handlers/SearchHandler";

const Search = () => {
    const context: any = useContext(Context);
    const { handleChange, handleSearch, resetSearch } = SearchHandler();

    return (
        <form onSubmit={handleSearch}>
            <TextField label="Search" name="q" value={context.search.q} onChange={handleChange} />
            <Button variant="contained" type="submit">Search</Button>
            <Button variant="contained" type="button" onClick={resetSearch}>Reset</Button>
        </form>
    )
}
export default Search;