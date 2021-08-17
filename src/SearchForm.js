import React, { useState, useContext } from "react";
import { GiLips } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import SearchResult from "./SearchResult";
import { useHistory } from "react-router-dom";
import { SearchContext } from "./SearchContext";
import Loading from "./Loading";

const SearchForm = () => {
  const {
    val,
    setVal,
    brand,
    setBrand,
    data,
    setSearchData,
    category,
    setCategory,
  } = useContext(SearchContext);

  const history = useHistory();

  const handleSub = (e) => {
    e.preventDefault();
    history.push("/search");

    fetch(
      `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_category=${category}&product_type=${val} `
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
      <div className="searchbig">
        <div className="searchForm">
          <h1
            style={{ fontWeight: "bold", color: "grey", padding: "3rem 2rem" }}
          >
            Search Products
          </h1>
          <form type="submit" onSubmit={handleSub}>
            <label htmlFor="search">Product Type</label>
            <br />
            <input
              style={{ width: "60%" }}
              type="text"
              name="search"
              placeHolder="e.g. Lipstick "
              value={val}
              onChange={(e) => {
                setVal(e.target.value);
              }}
            ></input>
            <br />
            <label htmlFor="searchbrand">Brand Name</label>
            <br />
            <input
              style={{ width: "60%" }}
              type="text"
              name="searchbrand"
              placeHolder="e.g. Stila"
              value={brand}
              onChange={(e) => {
                setBrand(e.target.value);
              }}
            ></input>
            <br />
            <label htmlFor="category">Category</label>
            <br />
            <input
              style={{ width: "60%" }}
              type="text"
              name="category"
              placeHolder="e.g. powder or cream"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            ></input>
            <br />

            <button
              to="/search"
              className="btn"
              style={{
                justifyContent: "center",
                textAlign: "center",
              }}
              type="submit"
              style={{ marginLeft: "7rem" }}
            >
              <span>
                <GiLips style={{ color: "red", fontSize: "25px" }} />
              </span>
            </button>
          </form>
        </div>
      </div>
      {/* <hr style={{ width: "60rem", color: "black", marginTop: "4rem" }} /> */}
    </>
  );
};

export default SearchForm;
