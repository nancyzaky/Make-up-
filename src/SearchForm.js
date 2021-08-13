import React, { useState, useContext } from "react";
import { GiLips } from "react-icons/gi";
import SearchResult from "./SearchResult";
import { useHistory } from "react-router-dom";
import { SearchContext } from "./SearchContext";
import Loading from "./Loading";

const SearchForm = () => {
  const { val, setVal, brand, setBrand, data, setSearchData } =
    useContext(SearchContext);

  const history = useHistory();
  // const [val, setVal] = useState("");
  // const [brand, setBrand] = useState("");
  // const [data, setSearchData] = useState([]);
  //      //#FF1493

  const handleSub = (e) => {
    e.preventDefault();
    history.push("/search");

    fetch(
      `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_type=${val}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setSearchData(data);
      });
    setVal("");
    setBrand("");
  };
  return (
    <>
      <div className="searchForm">
        <h1 style={{ textAlign: "center", fontWeight: "bold", color: "red" }}>
          Search Products
        </h1>
        <form type="submit" onSubmit={handleSub}>
          <label htmlFor="search">Product Type</label>
          <br />
          <input
            type="text"
            name="search"
            placeHolder="product type"
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
            }}
          ></input>
          <label htmlFor="searchbrand">Brand Name</label>
          <br />
          <input
            type="text"
            name="searchbrand"
            placeHolder="brand name"
            value={brand}
            onChange={(e) => {
              setBrand(e.target.value);
            }}
          ></input>

          <button
            to="/search"
            className="btn"
            style={{ justifyContent: "center", textAlign: "center" }}
            type="submit"
          >
            <span>
              <GiLips style={{ color: "red", fontSize: "25px" }} />
            </span>
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchForm;
