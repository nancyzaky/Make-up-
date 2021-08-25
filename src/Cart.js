import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import CartItem from "./CartItem";
import Loading from "./Loading";
import Alert from "./Alert";

const Cart = ({ count, setCount, cart, setCart }) => {
  const history = useHistory();
  const [tot, setTot] = useState(0);
  const [load, setIsLoad] = useState(true);
  const [alertRed, setAlertRed] = useState({
    show: false,
    type: "",
    message: "",
  });
  const fetchUrl = () => {
    fetch("http://localhost:4000/cart")
      .then((resp) => resp.json())
      .then((data) => {
        setIsLoad(false);
        if (data.length > 0) {
          console.log(data);
          setCart(data);
          const total = data.map((item) => {
            return parseInt(item.price * item.quantity);
          });

          const reducer = (accumulator, currentValue) =>
            accumulator + currentValue;

          setTot(total.reduce(reducer));
          console.log(total);
        }
      });
  };
  useEffect(() => {
    fetchUrl();
  }, [setCart, setTot]);

  useEffect(() => {
    const alertMessage = setTimeout(() => {
      setAlertRed({ show: false, message: "", type: "" });
    }, 4000);
    return clearTimeout(alertMessage);
  }, [alertRed]);
  return (
    <>
      <div style={{ height: "3000px" }}>
        <h1 style={{ textAlign: "center" }}>
          Shopping Cart
          <span style={{ textAlign: "center" }}>
            <FaOpencart style={{ color: "red", fontSize: "70px" }} />
          </span>
        </h1>

        {load && <Loading />}
        <section>
          {alertRed.show && <Alert {...alertRed} />}

          {cart.map((item) => {
            return (
              <CartItem
                key={item.id}
                item={item}
                cart={cart}
                setCart={setCart}
                tot={tot}
                setTot={setTot}
                count={count}
                setCount={setCount}
                setAlertRed={setAlertRed}
              />
            );
          })}

          <hr style={{ width: "70rem", color: "black" }}></hr>

          <div style={{ textAlign: "center" }}>
            <h1>Total</h1>
            <p>${tot}</p>
          </div>
        </section>
      </div>
    </>
  );
};
export default Cart;
