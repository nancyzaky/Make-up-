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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

const getStorage = () => {
  const list = localStorage.getItem("cart");
  if (list) {
    return JSON.parse(localStorage.getItem("cart"));
  }
};

function App() {
  const [cart, setCart] = useState(getStorage() || []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Navb />

      <Switch>
        <Route
          exact
          path="/"
          render={() => <MainApp cart={cart} setCart={setCart} />}
        />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/mycart" render={() => <Cart cart={cart} />} />
        <Route path="*" component={Error} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;

function MainApp({ cart, setCart }) {
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
      <MakeupList cart={cart} setCart={setCart} />
    </>
  );
}
