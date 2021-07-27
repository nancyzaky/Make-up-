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
function fetchdata(card) {
  console.log(card);
}
function Card({ item, cart, setCart }) {
  console.log(item);
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      {/* <h3>{item.brand}</h3> */}
      <div className="item">
        <img src={item.image_link} alt={item.brand} />
        <h2>${item.price}</h2>
        <h5>{item.product_type}</h5>
        <h5>{readMore ? item.description : showLess(item.description)}</h5>
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
            if (!cart.includes(item)) setCart([...cart, item]);
          }}
        >
          Add To Cart <AiOutlineShoppingCart></AiOutlineShoppingCart>
        </button>
      </div>
    </>
  );
}

export default Card;
