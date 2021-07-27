import React from "react";
import Contact from "./contact-data";

function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="social-icons">
          <h2 style={{ color: "white" }}>Our Social Media </h2>
          <ul className="footer-list">
            {Contact.map((contact) => {
              const { id, text, url } = contact;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul className="info">
            <li style={{ color: "white" }}>Contact Us</li>
            <li style={{ color: "white" }}>About-us</li>
            <li style={{ color: "white" }}>Location</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
