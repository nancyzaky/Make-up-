import React, { useState, useEffect, useRef, useContext } from "react";
import Loading from "./Loading";
import Card from "./Card";
import brands from "./data";
import Button from "./Button";
import picsUrl from "./pics";
import Cart from "./Cart";

function MakeupList(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  const [brand, setBrand] = useState(brands[42]);

  const fetchUrl = () => {
    fetch(
      `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        //console.log(data);
        setIsLoading(false);
        setItems(data);
      });
  };

  useEffect(() => {
    fetchUrl();
  }, [brand]);

  return (
    <div className={props.className}>
      <div className="menu-container">
        {brands.map((item, index) => {
          return (
            <Button
              name={item}
              key={index}
              index={index}
              setBrand={setBrand}
              brands={brands}
              photo={picsUrl[index]}
            />
          );
        })}
      </div>
      <h1 style={{ "text-align": "center" }}>{brand}</h1>
      <div className="top-section"></div>
      <main className="container">
        <section className="makeup-list">
          {/* {isLoading ? <Loading /> : null} */}
          {items.map((item) => {
            const {
              description,
              image_link,
              name,
              price,
              product_colors,
              product_type,
            } = item;
            return (
              <div>
                <ul className="item">
                  <Card
                    key={item.key}
                    item={item}
                    cart={cart}
                    setCart={setCart}
                  />
                  {/* <Button name={name} /> */}
                </ul>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}

export default MakeupList;
