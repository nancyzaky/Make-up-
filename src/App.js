import React, { useState, useEffect } from "react";
import "./App.css";
import MakeupList from "./MakeupList";
import brands from "./data";
import Pick from "./Pick";
import Menu from "./Menu";
import Signup from "./Signup";
import Login from "./Login";
import Cart from "./Cart";
import Card from "./Card";
import Error from "./Error";
import Navb from "./Navb";
import Footer from "./Footer";
import Brand from "./Brand";
import SearchResult from "./SearchResult";
import ScrollToTop from "./ScrollToTop";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

const getStorage = () => {
  const list = localStorage.getItem("cart");
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("cart"));
  }
};

function App() {
  const [cart, setCart] = useState([]);

  // const [cart, setCart] = useState(getStorage() || []);
  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);
  const [count, setCount] = useState(null);

  useEffect(() => {
    console.log(cart);
    fetch("http://localhost:4000/cart")
      .then((resp) => resp.json())
      .then((data) => {
        let tot = 0;
        data.forEach((item) => {
          tot += item.quantity;
        });
        setCount(tot);
      });
  }, []);
  return (
    <>
      <Navb count={count} />
      <ScrollToTop />

      <Switch>
        <Route exact path="/" render={() => <MainApp />} />
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
          <Brand
            brands={brands}
            count={count}
            setCount={setCount}
            cart={cart}
            setCart={setCart}
          />
        </Route>

        <Route path="/search">
          <SearchResult />
        </Route>
        <Route path="*" component={Error} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;

function MainApp() {
  return (
    <>
      <h1 className="header">Makeup Wish List</h1>
      <img
        src="https://prd-v3-i.chanel.com/content/dam/fnb/core/makeup/Landing%20page%20Make%20up/Les_Beiges_Summer_Light/landing_eu/VERT-PUSH-V3-MOB-EUUSUK@2x.adaptive.1242.jpg"
        alt="img"
        className="header-photo"
      />
      <section className="fav-pick-header">
        <h4>Our Favorite Picks</h4>
        <p>----------</p>
      </section>
      <Pick />
      <MakeupList />
    </>
  );
}
