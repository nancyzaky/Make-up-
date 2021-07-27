import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <h2>Error...</h2>
      <h4>Click to go to Home page</h4>
      <Link to="/">Home</Link>
    </>
  );
}

export default Error;
