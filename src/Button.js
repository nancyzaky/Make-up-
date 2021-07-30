import React, { useState, useEffect } from "react";
import picsUrl from "./pics";

function Button(props) {
  const { name, setBrand, brands, index, photo } = props;
  return (
    <>
      <div className="menu">
        <a
          onClick={(e) => {
            e.preventDefault();
            setBrand(brands[index]);
          }}
        >
          <h3>{name + " "}</h3>
        </a>
        <section>
          <img src={photo} style={{ height: "300px", width: "300px" }} />
        </section>
      </div>
    </>
  );
}

export default Button;
