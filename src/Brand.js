import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import Loading from "./Loading";

const Brand = ({ brands, addToCart }) => {
  let { id } = useParams();
  // const [brandName, setBrandName] = useState(brands[id]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchUrl = () => {
    fetch(
      `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brands[id]}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setLoading(false);
        setProducts(data);
      });
  };
  useEffect(() => {
    fetchUrl();
  }, []);
  return (
    <>
      {loading && <Loading />}
      <h1 style={{ textAlign: "center" }}>Products</h1>

      <div className="item">
        {products.map((product) => {
          return (
            <Card key={product.id} product={product} addToCart={addToCart} />
          );
        })}
      </div>
    </>
  );
};

export default Brand;
