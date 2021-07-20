import React, { useState, useEffect } from "react";
import "./App.css";
import MakeupList from "./MakeupList";
import brands from "./data";
import Nav from "./Nav";

function App() {
  return (
    <>
      <Nav />
      <h1 className="header">Cosmetics</h1>

      <MakeupList />
    </>
  );
}

export default App;
