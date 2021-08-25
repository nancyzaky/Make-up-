import React, { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { Alert } from "react-bootstrap";

function Login() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  async function handleSub(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("failed to log in");
    }
    setLoading(false);
  }
  return (
    <>
      <h1 style={{ marginLeft: "47%", fontSize: "bold" }}>Log In</h1>
      {error && <Alert variant="danger">{error}</Alert>}

      <div className="signup-form">
        <form type="submit" className="form" onSubmit={handleSub}>
          <label htmlFor="log in">Name:</label>
          <input
            type="text"
            id="login"
            name="login"
            placeholder="name"
            ref={emailRef}
          ></input>
          <label htmlFor="password">password:</label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="password"
            ref={passwordRef}
          ></input>
          <button
            type="submit"
            className="btn"
            sytle={{ "margin-top": "3rem" }}
            onSubmit={handleSub}
          >
            Log in
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
