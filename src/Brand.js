import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import Loading from "./Loading";

const Brand = ({ brands, count, setCount, cart, setCart }) => {
  let { id } = useParams();

  const [brandName, setBrandName] = useState(brands[id]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchUrl = () => {
    fetch(
      `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brandName}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
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
      <h1 style={{ "text-align": "center" }}>Products</h1>

      <div>
        <ul className="item">
          {products.map((product) => {
            return (
              <Card
                key={product.id}
                product={product}
                count={count}
                setCount={setCount}
                cart={cart}
                setCart={setCart}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Brand;
