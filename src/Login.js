import React from "react";

function Login() {
  return (
    <>
      <h1 style={{ "margin-left": "47%", "font-size": "bold" }}>Log In</h1>
      <div className="signup-form">
        <form type="submit" className="form">
          <label htmlFor="log in">Name:</label>
          <input type="text" id="login" name="login" placeHolder="name"></input>
          <label htmlFor="password">password:</label>
          <input
            type="text"
            id="password"
            name="password"
            placeHolder="password"
          ></input>
          <button
            type="submit"
            className="btn"
            sytle={{ "margin-top": "3rem" }}
          >
            Log in
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
