import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import picsUrl from "./pics";

function Button(props) {
  const { name, setBrand, brands, index, photo } = props;
  return (
    <>
      <div className="menu">
        <Link to={`/mybrand/${index}`}>
          <h3>{name + " "}</h3>
        </Link>
        <section>
          <Link to={`/mybrand/${index}`}>
            <img src={photo} style={{ height: "300px", width: "300px" }} />
          </Link>
        </section>
      </div>
    </>
  );
}

export default Button;
