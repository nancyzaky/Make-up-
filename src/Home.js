import React from "react";
import Pick from "./Pick";
import MakeupList from "./MakeupList";
const Home = () => {
  return (
    <>
      <h1 className="header">Makeup Wish List</h1>
      <img
        src="https://prd-v3-i.chanel.com/content/dam/fnb/core/makeup/Landing%20page%20Make%20up/Les_Beiges_Summer_Light/landing_eu/VERT-PUSH-V3-MOB-EUUSUK@2x.adaptive.1242.jpg"
        alt="img"
        className="header-photo"
      />
      <section className="fav-pick-header">
        <h4>Our Favorite Picks</h4>
        <p>----------</p>
      </section>
      
      <Pick />
      <MakeupList />
    </>
  );
};

export default Home;
