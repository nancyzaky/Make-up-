import React, { useState, useEffect, useRef } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineMenuUnfold } from "react-icons/ai";

function Nav() {
  const [classNames, setClassName] = useState("dropdown");
  const [background, setBackGround] = useState("background");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [top, setTop] = useState("");
  const [left, setLeft] = useState("");
  const [hover, setHover] = useState(false);
  const buttonRef = useRef(null);

  // console.log(classNames);
  const handleHover = (e) => {
    setBackGround("open-back");
    setHover(true);
    setClassName("open-dropdown");
    setTimeout(() => {
      setClassName("open-dropdown-active");
    }, 150);
    console.log(classNames);
    const cords = buttonRef.current.getBoundingClientRect();
    console.log(cords);

    setHeight(cords.height);
    setWidth(cords.width);
    setTop(cords.top);
    setLeft(cords.left);
  };
  const handleLeave = () => {
    setHover(false);
    setClassName("dropdown");
    setBackGround("background");
  };
  useEffect(() => {
    handleHover();
  }, [hover]);
  useEffect(() => {
    handleLeave();
  }, [hover]);
  return (
    <>
      <nav className="nav-bar">
        <div
          className={background}
          style={{
            height: `${height}px`,
            width: `${width}px`,
            transform: `translate(${left}px, ${top}px)`,
          }}
        >
          <span className="arrow"></span>
        </div>
        <ul className="nav-bar-list">
          <li
            className="hover-item"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <a href="#" className="tag">
              Menu
              <AiOutlineMenuUnfold></AiOutlineMenuUnfold>
            </a>
            <div className={classNames} ref={buttonRef}>
              <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
              </ul>
            </div>
          </li>
          <li
            className="hover-item"
            // onMouseEnter={handleEnter}
            // onMouseLeave={handleLeave}
          >
            <a href="#" className="tag">
              Log In
              <BiUserCircle></BiUserCircle>
            </a>
            <div className="dropdown">
              <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
              </ul>
            </div>
          </li>
          <li
            className="hover-item"
            // onMouseEnter={handleEnter}
            // onMouseLeave={handleLeave}
          >
            <a href="#" className="tag">
              shopping cart
              <AiOutlineShoppingCart></AiOutlineShoppingCart>
            </a>
            <div className="dropdown">
              <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
              </ul>
            </div>
          </li>
          <li
            className="hover-item"
            // onMouseEnter={handleEnter}
            // onMouseLeave={handleLeave}
          >
            <a href="#" className="tag">
              sign up
              <FaUsers></FaUsers>
            </a>
            <div className="dropdown">
              <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
