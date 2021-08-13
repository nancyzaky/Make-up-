import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import CartItem from "./CartItem";
import Loading from "./Loading";
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
  console.log(cart);
  const history = useHistory();
  const [tot, setTot] = useState(0);
  const [load, setIsLoad] = useState(false);
  const fetchUrl = () => {
    setIsLoad(true);
    fetch("http://localhost:4000/cart")
      .then((resp) => resp.json())
      .then((data) => {
        setIsLoad(false);
        setCart(data);
        const total = data.map((item) => {
          return parseInt(item.price);
        });
        const reducer = (accumulator, currentValue) =>
          accumulator + currentValue;

        setTot(total.reduce(reducer));
        console.log(total);
        //setCount(total.length);
      });
  };
  useEffect(() => {
    fetchUrl();
  }, [setCart, setTot]);

  const handleClick = (e) => {
    e.preventDefault();
    history.push("/");
  };
  return (
    <>
      <span style={{ textAlign: "center" }}>
        <FaOpencart style={{ color: "red", fontSize: "70px" }} />
      </span>
      <h1 style={{ "text-align": "center" }}>Shopping Cart</h1>
      {load && <Loading />}
      <section>
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
    </>
  );
};
export default Cart;
