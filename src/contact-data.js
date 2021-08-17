import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaPhoneAlt,
  FaInstagram,
  FaSnapchatGhost,
} from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";

const contactData = {
  followUs: [
    {
      id: 1,
      url: "http://www.twitter.com",
      header: "Twitter",
      text: <FaTwitter style={{ color: "red", fontSize: "30px" }}></FaTwitter>,
    },
    {
      id: 2,
      url: "http://www.facebook.com",
      header: " FaceBook",
      text: (
        <FaFacebook style={{ color: "red", fontSize: "30px" }}></FaFacebook>
      ),
    },
    {
      id: 3,
      url: "http://www.instagram.com",
      header: " Instagram",
      text: (
        <FaInstagram style={{ color: "red", fontSize: "30px" }}></FaInstagram>
      ),
    },
    {
      id: 4,
      url: "http://www.snapchat.com",
      text: (
        <FaSnapchatGhost
          style={{ color: "red", fontSize: "30px" }}
        ></FaSnapchatGhost>
      ),
      header: " SnapChat",
    },
  ],
  contactUs: [
    {
      id: 6,
      url: "mailto: nancyzki@yahoo.com",
      header: (
        <HiOutlineMail
          style={{ color: "white", fontSize: "30px" }}
        ></HiOutlineMail>
      ),
      text: "nnnn.gmail.com ",
    },
    {
      id: 7,
      url: "/",
      text: "1-999-999",
      header: (
        <FaPhoneAlt style={{ color: "white", fontSize: "30px" }}>
          Phone
        </FaPhoneAlt>
      ),
    },
  ],
  map: [
    {
      id: 9,
      url: "/map",
      text: (
        <GiEarthAmerica
          style={{ color: "red", fontSize: "30px" }}
        ></GiEarthAmerica>
      ),
      header: "Our Address",
    },
  ],
};

export default contactData;
