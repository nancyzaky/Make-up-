import React, { useContext, useState, useEffect } from "react";
import { SearchContext } from "./SearchContext";
import Loading from "./Loading";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Card from "./Card";
import { Link } from "react-router-dom";

const SearchResult = () => {
  const [loading, setLoading] = useState(true);
  const { val, data } = useContext(SearchContext);
  console.log(data);
  useEffect(() => {
    setLoading(false);
  }, [data]);
  return (
    <>
      {loading && <Loading />}
      {data.length === 0 && (
        <>
          <h3>Couldn't find a match</h3>
          <Link to="/">Go Back To Home Page</Link>
        </>
      )}

      <h2>{val}</h2>
      <div>
        {data.map((item) => {
          return (
            <ul className="item">
              <Card product={item} />
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default SearchResult;
