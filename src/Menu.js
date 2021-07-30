import React, { useState, useEffect, useRef } from "react";
import MakeupList from "./MakeupList";
function Menu() {
  const [show, setShow] = useState(false);
  const brandsList = useRef(null);
  const brandContainer = useRef(null);
  console.log(brandContainer);

  useEffect(() => {
    const currentHeight = brandsList.current.getBoundingClientRect().height;
    console.log(currentHeight);
    if (show) {
      brandContainer.current.style.height = `800px`;
    } else {
      brandContainer.current.style.height = `0px`;
    }
  }, [show]);
  return (
    <nav className="brands">
      <div className="brands">
        <div className="brands-header">
          <h2>Menu</h2>
          <button
            onClick={() => {
              setShow(!show);
            }}
          ></button>
        </div>
      </div>

      <div className="brands-cont" ref={brandContainer}>
        <MakeupList className="brands-list" ref={brandsList} />
      </div>
    </nav>
  );
}

export default Menu;
