import React, { useState, useEffect } from "react";

import Signup from "./Signup";
import Login from "./Login";
import Cart from "./Cart";
import Navb from "./Navb";
import Footer from "./Footer";
import Brand from "./Brand";
import SearchResult from "./SearchResult";
import ScrollToTop from "./ScrollToTop";
import brands from "./data";
import Home from "./Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(null);

  const addToCart = (product, shade, setAlert) => {
    console.log(cart);
    setAlert({ show: true, message: "Item added to cart", type: "success" });
    let itemExists = cart.filter((item) => {
      return item.id === product.id;
    });

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
      let newItem = { ...itemExists[0], quantity: updateQuantity + 1 };
      console.log(newItem);
      fetch(`http://localhost:4000/cart/${newItem.id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: updateQuantity + 1 }),
      });
      const updatedCart = cart.filter((item) => {
        return item.id !== newItem.id;
      });
      setCart([...updatedCart, newItem]);
    }
    setCount((count) => {
      return count + 1;
    });
  };

  useEffect(() => {
    fetch("http://localhost:4000/cart")
      .then((resp) => resp.json())
      .then((data) => {
        setCart(data);
        let tot = 0;

        data.forEach((item) => {
          tot += item.quantity;
        });
        setCount(tot);
      });
  }, []);
  return (
    <>
      <Router>
        <Navb count={count} />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route
            path="/mycart"
            render={() => (
              <Cart
                count={count}
                setCount={setCount}
                cart={cart}
                setCart={setCart}
              />
            )}
          />
          <Route path="/mybrand/:id">
            <Brand brands={brands} addToCart={addToCart} />
          </Route>

          <Route path="/search">
            <SearchResult addToCart={addToCart} />
          </Route>
          <Route path="*" component={Error} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
