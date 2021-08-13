import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

function showLess(str) {
  let newstr = str.split(" ");
  let indext = str.indexOf("."); //Ingredients
  let indexCapital = str.indexOf("."); //INGREDIENTS
  let result = str.substring(0, indext); //indext
  let resultCapital = str.substring(0, indexCapital); //indexCapital;

  return result ? result : resultCapital;
}
// function fetchdata(card) {
//   console.log(card);
// }
function Card({ product, count, setCount }) {
  console.log(count, setCount);
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      {/* <h3>{item.brand}</h3> */}

      <div
        key={product.id}
        style={{ justifyContent: "center", textAlign: "center" }}
      >
        <h1>{product.brand}</h1>

        <img
          src={product.image_link}
          alt={product.brand}
          className="brand-img"
        />
        <h2>{product.name}</h2>
        <h5>{product.product_type}</h5>
        <h2>${product.price}</h2>

        <h5>
          {readMore ? product.description : showLess(product.description)}
        </h5>
        {/* <h6>{item.product_colors}</h6> */}
        <button
          className="btn"
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          {readMore ? "show less" : "show more"}
        </button>
        <button
          className="btn"
          onClick={() => {
            const newObj = {
              img: product.image_link,
              name: product.brand,
              price: product.price,
              quantity: 1,
            };
            fetch("http://localhost:4000/cart", {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify(newObj),
            });
            console.log(count);
            fetch("http://localhost:4000/cart")
              .then((resp) => resp.json())
              .then((data) => {
                return setCount(data.length);
              });

            console.log(count);
          }}
        >
          Add To Cart <AiOutlineShoppingCart></AiOutlineShoppingCart>
        </button>
        <hr style={{ width: "60rem", color: "black", marginTop: "4rem" }} />
      </div>
    </>
  );
}

export default Card;
