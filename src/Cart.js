import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import CartItem from "./CartItem";
import Loading from "./Loading";
import Alert from "./Alert";
// function Cart(props) {
//   console.log(props.cart);
//   let tot = 0;
//   for (let i of props.cart) {
//     console.log(i.price);
//     tot += parseInt(i.price);
//   }
//   console.log(tot);
//   return (
//     <>
//       <div className="cart-bg">
//         <div className="cart-page">
//           <h2>My shopping cart</h2>
//           <ul>
//             {props.cart.map((item) => {
//               return (
//                 <>
//                   <ul>
//                     <li>
//                       <img src={item.image_link} alt={item.brand} />
//                       <h3>{item.price}</h3>
//                       <h3>{item.name}</h3>
//                       <h3>{item.brand}</h3>
//                     </li>
//                   </ul>
//                 </>
//               );
//             })}
//           </ul>
//         </div>
//         <h5>Total: {tot}</h5>
//       </div>
//     </>
//   );
// }

const Cart = ({ count, setCount, cart, setCart }) => {
  const history = useHistory();
  const [tot, setTot] = useState(0);
  const [load, setIsLoad] = useState(false);
  const [alertRed, setAlertRed] = useState({
    show: false,
    type: "",
    message: "",
  });
  const fetchUrl = () => {
    setIsLoad(true);
    fetch("http://localhost:4000/cart")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        if (data.length > 0) {
          console.log(data);
          setIsLoad(false);
          setCart(data);
          const total = data.map((item) => {
            if (item.quantity === 1) {
              return parseInt(item.price);
            } else {
              return parseInt(item.price * item.quantity);
            }
          });

          const reducer = (accumulator, currentValue) =>
            accumulator + currentValue;

          setTot(total.reduce(reducer));
          console.log(total);
          //setCount(total.length);
        }
      });
  };
  useEffect(() => {
    fetchUrl();
  }, [setCart, setTot]);
  const handleClick = (e) => {
    e.preventDefault();
    history.push("/");
  };
  useEffect(() => {
    setTimeout(() => {
      setAlertRed({ show: false, message: "", type: "" });
    }, 4000);
  }, [alertRed]);
  return (
    <>
      <div style={{ height: "3000px" }}>
        <h1 style={{ "text-align": "center" }}>
          Shopping Cart
          <span style={{ textAlign: "center" }}>
            <FaOpencart style={{ color: "red", fontSize: "70px" }} />
          </span>
        </h1>

        {load && <Loading />}
        <section>
          {alertRed.show && <Alert {...alertRed} />}

          <ul>
            {cart.map((item) => {
              return (
                <li key={item.id}>
                  <CartItem
                    item={item}
                    cart={cart}
                    setCart={setCart}
                    tot={tot}
                    setTot={setTot}
                    count={count}
                    setCount={setCount}
                    setAlertRed={setAlertRed}
                  />
                </li>
              );
            })}
          </ul>
          <hr style={{ width: "70rem", color: "black" }}></hr>
          {/* <button type="submit" onClick={handleClick}>
          submit

        </button> */}
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
