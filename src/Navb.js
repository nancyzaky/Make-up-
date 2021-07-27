import React, { useState, useEffect, useRef } from "react";
import { AiOutlineShoppingCart, AiOutlineMenuUnfold } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { GiLips } from "react-icons/gi";
import { Link } from "react-router-dom";

function Navb() {
  const [show, setShow] = useState(false);
  const divCont = useRef(null);
  const list = useRef(null);
  console.log(divCont);

  useEffect(() => {
    // console.log(currentHeight);

    const currentHeight = list.current.getBoundingClientRect().height;
    if (show) {
      console.log(currentHeight);
      divCont.current.style.height = `${currentHeight}px`;
    } else {
      divCont.current.style.height = `0px`;
    }
  }, [show]);

  // console.log(list.current.getBoundingClientRect().height);
  return (
    <nav className="nav-bar">
      <div className="nav-header">
        <h2 className="nav-h" style={{ color: "white" }}>
          Nancy's Cosmetics
        </h2>
        <button
          className="nav-toggle"
          onClick={() => {
            setShow(!show);
          }}
        >
          <span>
            <AiOutlineMenuUnfold />
          </span>
        </button>
      </div>

      <div className="menu-items-container" ref={divCont}>
        <ul className="menu-items" ref={list}>
          <li className="menu-item">
            <Link to="/" className="tag">
              Home
              <GiLips
                style={{
                  "font-size": "24px",
                  "padding-left": "1rem",
                  "padding-right": "1rem",
                }}
              ></GiLips>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/mycart" className="tag">
              shopping cart
              <AiOutlineShoppingCart
                style={{
                  "font-size": "24px",
                  "padding-left": "1rem",
                  "padding-right": "1rem",
                }}
              ></AiOutlineShoppingCart>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/login" className="tag">
              Log In
              <BiUserCircle
                style={{
                  "font-size": "24px",
                  "padding-left": "1rem",
                  "padding-right": "1rem",
                }}
              ></BiUserCircle>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/signup" className="tag">
              sign up
              <FaUsers
                style={{
                  "font-size": "24px",
                  "padding-left": "1rem",
                  "padding-right": "1rem",
                }}
              ></FaUsers>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navb;
