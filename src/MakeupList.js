import React from "react";
import brands from "./data";
import Button from "./Button";
import picsUrl from "./pics";
import Discount from "./Discount";
import SearchForm from "./SearchForm";
import Video from "./Video";

function MakeupList() {
  return (
    <>
      <div>
        <div className="menu-container">
          {brands.map((item, index) => {
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
