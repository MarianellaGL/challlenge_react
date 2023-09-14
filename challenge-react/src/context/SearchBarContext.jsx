import React, { createContext, useState } from "react";

export const SearchBarContext = createContext();

const SearchBarContextProvider = (props) => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <SearchBarContext.Provider value={{ searchTerm, setSearchTerm }}>
            {props.children}
        </SearchBarContext.Provider>
    );
};

export default SearchBarContextProvider;