import React, { useState, useEffect, useRef } from "react";

const CartItem = ({ item, cart, setCart, tot, setTot, count, setCount }) => {
  const { id, img, price, name } = item;
  const [val, setVal] = useState(1);
  const refVal = useRef();
  //console.log(refVal.current.value);
  return (
    <>
      <ul className="cart-item" key={id}>
        <li className="item-list">
          <img src={img} alt={name} className="cart-img" />
          <li>
            <h3 className="cart-item-name">Product Brand: {name}</h3>
            <h3 className="cart-item-price">product price: ${price * val}</h3>
            <label htmlFor="quantity">Quantity</label>

            <input
              ref={refVal}
              type="number"
              name="quantity"
              className="increase"
              value={val}
              onChange={(e) => {
                console.log(refVal.current.value);
                setVal(e.target.value);
                setTot(tot + item.price * val - 1);
                setCount(count + (e.target.value - 1));
              }}
            ></input>
            <button
              className="btn"
              onClick={() => {
                console.log(count);
                fetch(`http://localhost:4000/cart/${item.id}`, {
                  method: "DELETE",
                });
                console.log(cart);
                setCart(
                  cart.filter((product) => {
                    return product.id !== item.id;
                  })
                );
                setTot(tot - parseInt(item.price * val));
                console.log(count);
                setCount(() => {
                  return count--;
                });
                console.log(count);
              }}
            >
              Remove from cart
            </button>
          </li>
        </li>
      </ul>
    </>
  );
};

export default CartItem;
