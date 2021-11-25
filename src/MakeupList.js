import React, { useState } from "react";
import brands from "./data";
import Button from "./Button";
import picsUrl from "./pics";
import Discount from "./Discount";
import SearchForm from "./SearchForm";
import Video from "./Video";

function MakeupList() {
  const [val, setVal] = useState("");
  const [brand, setBrand] = useState(brands);
  const handleChange = (e) => {
    setVal(e.target.value);
    console.log(e.target.value);
    let wordLen = e.target.value.length;
    let newArr = [...brands].filter((item) => {
      return item.slice(0, wordLen) === e.target.value;
    });
    setBrand(newArr);
  };
  return (
    <>
      <div>
        <div className="menu-container">
          {brand.map((item, index) => {
            return (
              <Button
                name={item}
                key={index}
                index={index}
                photo={picsUrl[index]}
              />
            );
          })}
        </div>

        <div>
          <SearchForm />
          <input
            style={{ backgroundColor: "black", color: "white" }}
            type="text"
            name="search"
            id="search"
            value={val}
            onChange={handleChange}
          ></input>
        </div>

        <section>{<Video className="videos" />}</section>
      </div>
      <div>
        <Discount />
      </div>
    </>
  );
}

export default MakeupList;
