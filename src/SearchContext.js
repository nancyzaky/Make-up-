import React, { useContext, useState } from "react";
import contactData from "./contact-data";

const SearchContext = React.createContext();
function SearchProvider({ children }) {
  const [val, setVal] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [data, setSearchData] = useState([]);
  const [location, setLocation] = useState({});
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [links, setLinks] = useState({ page: "", lis: [] });

  const openSubMenu = (text, coordinates) => {
    console.log(text);
    if (text === "Follow Us") {
      setLinks({ page: "Our Social Media", lis: contactData.followUs });

      console.log(links);
    } else if (text === "Contact Us") {
      setLinks({ page: "Contact", lis: contactData.contactUs });
    } else if (text === "Location") {
      setLinks({ page: "Our Location", lis: contactData.map });
    }
    setLocation(coordinates);
    console.log(location);

    setIsSubMenuOpen(true);
  };
  return (
    <SearchContext.Provider
      value={{
        val,
        setVal,
        brand,
        setBrand,
        data,
        setSearchData,
        setIsSubMenuOpen,
        isSubMenuOpen,
        location,
        openSubMenu,
        links,
        category,
        setCategory,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
