import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Card from "./Card";
import brands from "./data";
import Button from "./Button";

function MakeupList() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [value, setValue] = useState(43);
  const [brand, setBrand] = useState(brands[value]);

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
  }, []);
  return (
    <>
      <div className="top-section">
        {brands.map((brand) => {
          return (
            <button
              onClick={(brand, index) => {
                console.log(index);
                setValue(index);
              }}
            >
              {brand}
            </button>
          );
        })}
      </div>
      <main className="container">
        <section className="makeup-list">
          {isLoading ? <Loading /> : null}
          {items.map((item) => {
            const {
              description,
              image_link,
              name,
              price,
              product_colors,
              product_type,
            } = item;
            // console.log(item);
            return (
              <div className="item">
                <Card key={item.key} item={item} />
                {/* <Button name={name} /> */}
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default MakeupList;
