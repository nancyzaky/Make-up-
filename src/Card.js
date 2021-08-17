import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Alert from "./Alert";
import { BsCircle } from "react-icons/bs";

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
function Card({ product, count, setCount, cart, setCart }) {
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const [readMore, setReadMore] = useState(false);
  const [shade, setShade] = useState("PLEASE SELECT SHADE Befor CHECK OUT");
  const handleRadio = (e) => {
    console.log(e.currentTarget.value);
    setShade(e.currentTarget.value);
  };
  const handleClick = () => {
    setAlert({ show: true, message: "Item added to cart", type: "success" });
    const itemExists = cart.filter((item) => {
      return item.id === product.id;
    });
    console.log(itemExists);
    if (itemExists.length === 0) {
      let newObj = {
        id: product.id,
        image: product.image_link,
        name: product.name,
        brand: product.brand,
        quantity: 1,
        price: product.price,
        shade: shade,
      };
      fetch("http://localhost:4000/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newObj),
      });
      setCart([...cart, newObj]);
    } else {
      let updateQuantity = itemExists[0].quantity;
      let newItem = { ...itemExists[0], quantity: (updateQuantity += 1) };
      console.log(newItem);
      fetch(`http://localhost:4000/cart/${newItem.id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: (updateQuantity += 1) }),
      });
      const updatedCart = cart.filter((item) => {
        return item.id !== newItem.id;
      });
      setCart([...updatedCart, newItem]);
    }
    setCount(() => {
      return count++;
    });
  };
  useEffect(() => {
    setTimeout(() => {
      setAlert({ show: false, message: "", type: "" });
    }, 4000);
  }, [alert]);

  return (
    <>
      {/* <h3>{item.brand}</h3> */}
      <div
        className="shad"
        key={product.id}
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
        <ul>
          {product.product_colors.map((item) => {
            const newColor = item.hex_value;
            return (
              <span
                style={{ backgroundColor: "transparent", padding: "0.4rem" }}
              >
                <BsCircle
                  style={{ color: newColor, backgroundColor: newColor }}
                ></BsCircle>
              </span>
            );
          })}
        </ul>
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
          // onClick={() => {
          //   const newObj = {
          //     img: product.image_link,
          //     name: product.brand,
          //     price: product.price,
          //     quantity: 1,
          //   };
          //   fetch("http://localhost:4000/cart", {
          //     method: "POST",
          //     headers: { "Content-type": "application/json" },
          //     body: JSON.stringify(newObj),
          //   });
          //   console.log(count);
          //   fetch("http://localhost:4000/cart")
          //     .then((resp) => resp.json())
          //     .then((data) => {
          //       return setCount(data.length);
          //     });

          //   console.log(count);
          // }}
        >
          Add To Cart <AiOutlineShoppingCart></AiOutlineShoppingCart>
        </button>

        {/* <hr style={{ width: "60rem", color: "black", marginTop: "4rem" }} /> */}
      </div>
    </>
  );
}

export default Card;
