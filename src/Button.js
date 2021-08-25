import React, { useState } from "react";
import { Link } from "react-router-dom";
// import picsUrl from "./pics";
// import Card from "react-bootstrap/Card";
const Button = ({ name, index, photo }) => {
  const [classname, setClassname] = useState("");

  return (
    <>
      <div
        className={`menu ${classname}`}
        onMouseOver={() => {
          setClassname("shad");
        }}
        onMouseOut={() => {
          setClassname("");
        }}
      >
        <Link to={`/mybrand/${index}`}>
          <h3>{name + " "}</h3>
        </Link>
        <section>
          <Link to={`/mybrand/${index}`}>
            <img
              src={photo}
              style={{ height: "300px", width: "300px" }}
              alt={name}
            />
          </Link>
        </section>
      </div>
    </>
  );
};

export default Button;
