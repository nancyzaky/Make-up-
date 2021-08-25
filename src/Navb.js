import React, { useState, useEffect, useRef } from "react";
import { GiEyeOfHorus } from "react-icons/gi";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import { links } from "./data";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useAuth } from "./AuthContext";

function Navb({ count }) {
  const { logout, currentUser } = useAuth();
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const divCont = useRef(null);
  const list = useRef(null);
  const history = useHistory();

  async function handleLogOut(e) {
    e.preventDefault();
    try {
      setError("");
      logout();
    } catch {
      setError("failed to logout");
      history.push("/login");
    }
  }
  useEffect(() => {
    const currentHeight = list.current.getBoundingClientRect().height;
    if (show) {
      divCont.current.style.height = `${currentHeight}px`;
    } else {
      divCont.current.style.height = `0px`;
    }
  }, [show]);

  return (
    <nav className="nav-bar">
      <div className="nav-header">
        <h2
          className="nav-h"
          style={{
            color: "darkred",

            fontSize: "40px",
            paddingLeft: "1rem",
          }}
        >
          Nancy's Cosmetics <GiEyeOfHorus />
        </h2>
        <div className="shopping-count">
          <Badge color="secondary" badgeContent={count}>
            <ShoppingCartIcon
              style={{ fontSize: "42px" }}
              onClick={() => {
                history.push("/mycart");
              }}
            />
          </Badge>
        </div>
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
          {links.map((link) => {
            return (
              <>
                <li className="menu-item" key={link.id}>
                  <Link to={link.path} className="tag">
                    {link.text}
                    {link.icon}
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navb;
