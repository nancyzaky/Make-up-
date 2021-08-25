import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SearchProvider } from "./SearchContext";
import { AuthProvider } from "./AuthContext";

import { BrowserRouter as Router } from "react-router-dom";

const Routing = () => {
  return (
    <Router>
      <AuthProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </AuthProvider>
    </Router>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);
