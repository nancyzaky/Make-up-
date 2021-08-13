import React, { useState, useEffect, useRef, useContext } from "react";
import Loading from "./Loading";
import Card from "./Card";
import brands from "./data";
import Button from "./Button";
import picsUrl from "./pics";
import Cart from "./Cart";

import SearchForm from "./SearchForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Video from "./Video";

function MakeupList(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  // const [cart, setCart] = useState([]);

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
    <>
      {isLoading && <Loading />}
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
        <div>
          <SearchForm />
        </div>
        <section>
          <Video className="videos" />
        </section>
      </div>
    </>
  );
}

export default MakeupList;
