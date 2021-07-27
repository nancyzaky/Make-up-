import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Signup from "./Signup";
import Login from "./Login";
import Cart from "./Cart";

import Error from "./Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navb from "./Navb";
import Footer from "./Footer";
// import reportWebVitals from "./reportWebVitals";
const Routing = () => {
  return (
    <Router>
      <Navb />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/mycart" component={Cart} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
