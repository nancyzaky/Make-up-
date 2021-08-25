import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
const CartItem = ({
  item,
  cart,
  setCart,
  tot,
  setTot,
  count,
  setCount,
  setAlertRed,
}) => {
  const { id, image, price, name, quantity, shade } = item;
  const [val, setVal] = useState(quantity);

  return (
    <>
      <div className="cart-item">
        <section className="item-list">
          <img src={image} alt={name} className="cart-img" />
          <section>
            <h3 className="cart-item-name">Product Brand: {name}</h3>
            <h3 className="cart-item-price">product price: ${price * val}</h3>
            <h6>shade: {shade}</h6>
            <label htmlFor="quantity">Quantity</label>

            <input
              type="number"
              name="quantity"
              className="increase"
              max="15"
              min="1"
              value={val}
              onChange={(e) => {
                let changedVal;
                if (e.target.value > val) {
                  setTot(tot + item.price * (e.target.value - val));
                  changedVal = count + (e.target.value - val);
                  setCount(() => {
                    return changedVal;
                  });
                } else {
                  setTot(tot - item.price * (val - e.target.value));
                  changedVal = count - (val - e.target.value);

                  setCount(() => {
                    return changedVal;
                  });
                }
                console.log(changedVal);
                if (changedVal <= 15 && changedVal >= 0) {
                  fetch(`http://localhost:4000/cart/${id}`, {
                    method: "PATCH",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ quantity: changedVal }),
                  });

                  setVal(e.target.value);
                }
              }}
            ></input>
            <button
              className="btn"
              onClick={() => {
                console.log(count);
                console.log(item.quantity, item);
                setCount(count - val);

                fetch(`http://localhost:4000/cart/${id}`, {
                  method: "DELETE",
                });
                console.log(cart);

                setCart(
                  cart.filter((product) => {
                    return product.id !== item.id;
                  })
                );
                setTot(tot - parseInt(item.price * val));

                setAlertRed({
                  show: true,
                  message: "item deleted from cart",
                  type: "danger",
                });
              }}
            >
              Remove from cart <BsTrash />
            </button>
          </section>
        </section>
      </div>
    </>
  );
};

export default CartItem;
