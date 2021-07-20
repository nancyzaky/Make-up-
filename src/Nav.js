import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";

function Nav() {
  return (
    <>
      <nav className="nav-bar">
        <a href="#" className="tag">
          sign up
          <FaUsers></FaUsers>
        </a>
        <a href="#" className="tag">
          Log In
          <BiUserCircle></BiUserCircle>
        </a>
        <a href="#" className="tag">
          shopping cart
          <AiOutlineShoppingCart></AiOutlineShoppingCart>
        </a>
      </nav>
    </>
  );
}

export default Nav;
