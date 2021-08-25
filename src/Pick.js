import React, { useState, useEffect } from "react";
import picks from "./picks";
import { GrPrevious, GrNext } from "react-icons/gr";

function Pick() {
  const [items, setItems] = useState(picks);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = items.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);
  useEffect(() => {
    let autoSlide = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      return clearInterval(autoSlide);
    };
  }, [index, items]);
  return (
    <>
      <div className="section-center">
        {items.map((pick, itemIndex) => {
          const { brand, name, image, desc, price } = pick;
          let position = "nextSlide";
          if (itemIndex === index) {
            position = "activeSlide";
          }
          if (
            itemIndex === index - 1 ||
            (index === 0 && itemIndex === items.length - 1)
          ) {
            position = "prevSlide";
          }
          return (
            <article className={position} key={itemIndex}>
              <img src={image} alt="name" />
              <h4>{name}</h4>
              <p>{brand}</p>
              <p>{price}</p>
              <h5>{desc}</h5>
            </article>
          );
        })}
      </div>
      <div id="pick-btn-div">
        <a
          className="picks-btn"
          onClick={() => {
            console.log("click");
            setIndex(index - 1);
          }}
        >
          <span>
            <GrPrevious className="pick-btn"></GrPrevious>
          </span>
        </a>
        <a
          className="picks-btn"
          onClick={() => {
            console.log("clicked");
            setIndex(index + 1);
          }}
        >
          <span>
            <GrNext className="pick-btn"></GrNext>
          </span>
        </a>
      </div>
    </>
  );
}

export default Pick;
