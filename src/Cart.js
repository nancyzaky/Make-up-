import React from "react";
function Cart(props) {
  console.log(props.cart);
  const prices = props.cart;
  const tot = prices.map((item) => {
    return item.price;
  });
  const result = tot.reduce((item, accu) => {
    accu = accu + item;
    return accu;
  }, 0);
  console.log(tot);
  return (
    <>
      <div className="cart-bg">
        <div className="cart-page">
          <h2>My shopping cart</h2>
          <ul>
            {props.cart.map((item) => {
              return <h3>{item.price}</h3>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Cart;
