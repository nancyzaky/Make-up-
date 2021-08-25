import React, { useContext } from "react";
import SubMenu from "./SubMenu";
import { SearchContext } from "./SearchContext";

function Footer() {
  const { openSubMenu, setIsSubMenuOpen } = useContext(SearchContext);
  const handleHover = (e) => {
    const text = e.target.textContent;

    console.log(text);
    const measurements = e.target.getBoundingClientRect();
    console.log(measurements);
    const center = (measurements.left + measurements.right) / 2;
    const bottom = measurements.bottom - 4;
    console.log(center, bottom);
    openSubMenu(text, { center, bottom });
  };
  const handleHoverOut = () => {
    console.log("hi");
    setIsSubMenuOpen(false);
  };
  return (
    /* <div className="social-icons">
          <h2 style={{ color: "white", "padding-top": "1rem" }}>
            Our Social Media{" "}
          </h2> */
    /* <ul className="footer-list">
          {Contact.map((contact) => {
            const { id, text, url } = contact;
            return (
              <li key={id}>
                <a
                  href={url}
                  onMouseOver={handleHover}
                  // onMouseOut={handleHoverOut}
                >
                  {text}
                </a>
              </li>
            );
          })}
        </ul> */
    /* </div> */
    <>
      <SubMenu />
      <footer
        className="footer-container"
        onMouseOver={handleHover}
        onMouseOut={handleHoverOut}
      >
        <div className="info">
          <ul style={{ paddingTop: "3rem" }}>
            <li
              className="links"
              style={{
                color: "white",
                display: "inline",
                padding: "3rem 3rem",
                fontWeight: "bold",
              }}
            >
              Contact Us
            </li>
            <li
              className="links"
              style={{
                color: "white",
                display: "inline",
                padding: "3rem 3rem",
                fontWeight: "bold",
              }}
            >
              Follow Us
            </li>
            <li
              className="links"
              style={{
                color: "white",
                display: "inline",
                padding: "3rem 3rem",
                fontWeight: "bold",
              }}
            >
              Location
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
