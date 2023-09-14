import { Autocomplete, TextField } from "@mui/material";
import entries from '../mockups/entries.json';
import { useContext } from "react";
import { SearchBarContext } from "../context/SearchBarContext";

const SearchBar = () => {
    const { searchTerm, setSearchTerm } = useContext(SearchBarContext);

    const handleSearchChange = (_, value, reason) => {
        if (reason === "clear") {
            setSearchTerm(""); // Establece el término de búsqueda en una cadena vacía cuando se borra.
        } else {
            setSearchTerm(value);
        }
    };

    return (
        <Autocomplete
            freeSolo
            disableClearable={false} // Habilita el botón de borrado
            options={entries.entries.map((option) => option.name)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search input"
                    InputProps={{
                        ...params.InputProps,
                        type: 'search',
                    }}
                />
            )}
            onChange={handleSearchChange}
            sx={{ height: "10px", width: "50%", margin: "20px 20px 20px 100px" }}
        />
    );
};

export default SearchBar;