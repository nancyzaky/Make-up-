import React, { useState, useEffect } from "react";

function showLess(str) {
  let newstr = str.split(" ");
  let indext = str.indexOf("Ingredients");
  let indexCapital = str.indexOf("INGREDIENTS");
  let result = str.substring(0, indext);
  let resultCapital = str.substring(0, indexCapital);

  return result ? result : resultCapital;
}
function Card({ item }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      {/* <h3>{item.brand}</h3> */}
      <div className="item">
        <img src={item.image_link} alt={item.brand} />
        <h2>${item.price}</h2>
        <h5>{readMore ? item.description : showLess(item.description)}</h5>
        <h5>{item.product_type}</h5>
        {/* <h6>{item.product_colors}</h6> */}
        <button
          className="btn"
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          show ingredients
        </button>
      </div>
    </>
  );
}

export default Card;
