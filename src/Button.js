import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import picsUrl from "./pics";
import Card from "react-bootstrap/Card";
function Button(props) {
  const [classn, setClassn] = useState("");
  const { name, setBrand, brands, index, photo } = props;

  return (
    <>
      <div
        className={`menu ${classn}`}
        onMouseOver={() => {
          setClassn("shad");
        }}
        onMouseOut={() => {
          setClassn("");
        }}
      >
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
