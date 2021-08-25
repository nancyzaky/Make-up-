import React, { useContext, useRef, useEffect, useState } from "react";
import { SearchContext } from "./SearchContext";

const SubMenu = () => {
  const { isSubMenuOpen, setIsSubMenuOpen, location, links } =
    useContext(SearchContext);
  const [columns, setColumns] = useState("col-1");
  const menuContainer = useRef();
  useEffect(() => {
    setColumns("col-1");
    const { center, bottom } = location;
    if (links.lis.length === 2) {
      setColumns("col-2");
    } else if (links.lis.length === 4) {
      setColumns("col-4");
    }
    console.log(menuContainer.current.textContent);
    menuContainer.current.style.left = `${center}px`;
    menuContainer.current.style.bottom = `${bottom}px`;
  }, [location, links]);
  return (
    <>
      <aside
        className={`${isSubMenuOpen ? "submenu show" : "submenu"}`}
        ref={menuContainer}
      >
        <div
          className={`submenu-center ${columns}`}
          style={{ justifyContent: "center" }}
        >
          {links.lis.map((link) => {
            const { id, text, url, header } = link;
            return (
              <div style={{ display: "grid" }}>
                <p>{header}</p>
                <a href={url} key={id} style={{ color: "red" }}>
                  {text}
                </a>
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default SubMenu;
