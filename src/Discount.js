import React from "react";

const Discount = () => {
  return (
    <>
      <div
        className={`commentsbg shad`}
        style={{
          marginTop: "4rem",
          width: "80%",
          marginLeft: "10rem",
          borderRadius: "2rem",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ marginTop: "4rem" }}>Welcome!</h1>
          <h2>We love to see new people on our site</h2>
          <h2>
            We would love to send you a 15% Discount you can use on your first
            purchase
          </h2>
          <h2>
            Just let us know which email address we should send the discount to.
          </h2>
        </div>
        <div style={{ display: "grid", paddingLeft: "10rem" }}>
          <label htmlFor="comment" style={{ fontWeight: "bold" }}></label>
          <input
            type="text"
            placeholder="Email"
            style={{
              width: "80%",
              height: "40px",
              borderRadius: "2rem",
              marginTop: "7rem",
            }}
          ></input>
          <br />
          <button className="btn" style={{ textAlign: "center" }}>
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Discount;
