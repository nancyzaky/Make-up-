import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Alert from "./Alert";
import { BsCircle } from "react-icons/bs";

function showLess(str) {
  // let newstr = str.split(" ");
  let indext = str.indexOf("."); //Ingredients
  let indexCapital = str.indexOf("."); //INGREDIENTS
  let result = str.substring(0, indext); //indext
  let resultCapital = str.substring(0, indexCapital); //indexCapital;

  return result ? result : resultCapital;
}

function Card({ product, addToCart }) {
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const [readMore, setReadMore] = useState(false);
  const [shade, setShade] = useState("PLEASE SELECT SHADE BEFORE CHECK OUT");
  const handleRadio = (e) => {
    console.log(e.currentTarget.value);
    setShade(e.currentTarget.value);
  };
  const handleClick = () => {
    addToCart(product, shade, setAlert);
  };
  useEffect(() => {
    const displayAlert = setTimeout(() => {
      setAlert({ show: false, message: "", type: "" });
    }, 4000);
  }, [alert]);

  return (
    <>
      <div
        className="shad"
        style={{ justifyContent: "center", textAlign: "center" }}
      >
        <h1>{product.brand}</h1>
        {alert.show && <Alert {...alert} />}

        <img
          src={
            product.image_link
              ? product.image_link
              : ` https://images.ulta.com/is/image/Ulta/2511153?op_sharpen=1&resMode=bilin&qlt=85&wid=800&hei=800&fmt=jpg`
          }
          alt={product.brand}
          className="brand-img"
        />
        <h2>{product.name}</h2>
        <h5>{product.product_type}</h5>
        <h2>${product.price !== "0.0" ? product.price : 20}</h2>

        <h5>Shades</h5>
        <div>
          {product.product_colors.map((item, index) => {
            const newColor = item.hex_value;
            return (
              <span
                key={index}
                style={{ backgroundColor: "transparent", padding: "0.4rem" }}
              >
                <BsCircle
                  style={{ color: newColor, backgroundColor: newColor }}
                ></BsCircle>
              </span>
            );
          })}
        </div>
        <div
          style={{
            marginTop: "2rem",
            alignContent: "center",
            textAlign: "center",
          }}
        >
          <select
            name="colors"
            id="colors"
            className="shade"
            onChange={handleRadio}
          >
            {" "}
            <option value="select">Select</option>
            {product.product_colors.map((color) => {
              return (
                <option
                  value={color.colour_name ? color.colour_name : "select"}
                >
                  {color.colour_name}{" "}
                </option>
              );
            })}
          </select>
        </div>

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
          style={{ margin: "1rem 2rem" }}
          className="btn"
          onClick={handleClick}
        >
          Add To Cart <AiOutlineShoppingCart></AiOutlineShoppingCart>
        </button>
      </div>
    </>
  );
}

export default Card;
