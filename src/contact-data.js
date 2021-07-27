import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaPhoneAlt,
  FaInstagram,
  FaSnapchatGhost,
} from "react-icons/fa";

const contactData = [
  {
    id: 1,
    url: "http://www.twitter.com",
    text: (
      <FaTwitter style={{ color: "white", "font-size": "30px" }}></FaTwitter>
    ),
  },
  {
    id: 2,
    url: "http://www.facebook.com",
    text: (
      <FaFacebook style={{ color: "white", "font-size": "30px" }}></FaFacebook>
    ),
  },
  {
    id: 3,
    url: "http://www.instagram.com",
    text: (
      <FaInstagram
        style={{ color: "white", "font-size": "30px" }}
      ></FaInstagram>
    ),
  },
  {
    id: 4,
    url: "http://www.snapchat.com",
    text: (
      <FaSnapchatGhost
        style={{ color: "white", "font-size": "30px" }}
      ></FaSnapchatGhost>
    ),
  },
];

export default contactData;
