import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SearchProvider } from "./SearchContext";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import reportWebVitals from "./reportWebVitals";
const Routing = () => {
  return (
    <Router>
      <SearchProvider>
        <App />
      </SearchProvider>
    </Router>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);
