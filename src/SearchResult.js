import React, { useContext, useState, useEffect } from "react";
import { SearchContext } from "./SearchContext";
import Loading from "./Loading";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Card from "./Card";
import { Link, useLocation } from "react-router-dom";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const SearchResult = ({ addToCart }) => {
  let query = useQuery();
  const brandName = query.get("brand");
  const categoryName = query.get("product_category");
  const valName = query.get("product_type");
  console.log(brandName, categoryName, valName);

  const [loading, setLoading] = useState(true);
  const [noMatch, setNoMatch] = useState(false);
  const [data, setData] = useState([]);

  const fetchUrl = () => {
    fetch(
      `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brandName}&product_category=${categoryName}&product_type=${valName} `
    )
      .then(
        (resp) => resp.json()
        // setLoading(false);
      )
      .then((data) => {
        setLoading(false);
        if (data.length === 0) {
          setNoMatch(true);
        }
        setData(data);
      });
  };
  useEffect(() => {
    fetchUrl();
  }, []);
  return (
    <>
      {loading && <Loading />}
      {noMatch && (
        <>
          <h3>Couldn't find a match</h3>
          <Link to="/">Go Back To Home Page</Link>
        </>
      )}

      <div>
        {data.map((item) => {
          return (
            <ul className="item">
              <Card product={item} addToCart={addToCart} key={item.id} />
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default SearchResult;
