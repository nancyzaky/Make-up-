import React, { useContext, useState } from "react";

const SearchContext = React.createContext();
function SearchProvider({ children }) {
  const [val, setVal] = useState("");
  const [brand, setBrand] = useState("");
  const [data, setSearchData] = useState([]);
  return (
    <SearchContext.Provider
      value={{ val, setVal, brand, setBrand, data, setSearchData }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
