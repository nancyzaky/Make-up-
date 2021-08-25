import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { GiLips } from "react-icons/gi";
// import { ImCart } from "react-icons/im";

const brands = [
  "anna sui",
  "annabelle",
  "butter london",
  "cargo cosmetics",
  "colourpop",
  "covergirl",
  "dalish",
  "dior",
  "dr. hauschka",
  "e.l.f.",
  "essie",
  "glossier",
  "iman",
  "l'oreal",
  "lotus cosmetics usa",
  "marcelle",
  "marienatie",
  "maybelline",
  "milani",
  "mineral fusion",
  "misa",
  "mistura",
  "moov",
  "nyx",
  "orly",
  "pacifica",
  "penny lane organics",
  "physicians formula",
  "pure anada",
  "rejuva minerals",
  "revlon",
  "sante",
  "sinful colours",
  "smashbox",
  "stila",
  "suncoat",
  "wet n wild",
  "zorah",
  "burt's bees",
];

export const links = [
  { id: 1, path: "/", icon: <GiLips className="navB-icons" />, text: "Home" },
  {
    id: 2,
    path: "/mycart",
    icon: <AiOutlineShoppingCart className="navB-icons" />,
    text: "Shopping Cart",
  },
  {
    id: 3,
    path: "/login",
    icon: <BiUserCircle className="navB-icons" />,
    text: "Log In",
  },
  {
    id: 4,
    path: "/signup",
    icon: <FaUsers className="navB-icons" />,
    text: "Sign Up",
  },
  {
    id: 5,
    path: "/",
    icon: <FaUsers className="navB-icons" />,
    text: "Log Out",
  },
];

export default brands;
