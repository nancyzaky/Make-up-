import React from "react";
import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import { useAuth } from "./AuthContext";

function Signup() {
  const { signup, currentUser } = useAuth();
  const history = useHistory();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleSub(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("passwords dont match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      console.log(error);
      setError("failed to create an account");
    }
    setLoading(false);
  }
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "bold",
        }}
      >
        Sign Up
      </h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <div className="signup-form" style={{ maxWidth: "400px" }}>
        <div
          style={{
            minHeight: "100vh",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Card>
            <Card.Body>
              <Form onSubmit={handleSub}>
                <Form.Group id="email">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    ref={emailRef}
                    required
                  ></Form.Control>
                </Form.Group>

                <Form.Group id="password">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordRef}
                    required
                  ></Form.Control>
                </Form.Group>

                <Form.Group id="passwordconfirm">
                  <Form.Label>Confirm Password:</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    required
                  ></Form.Control>
                </Form.Group>
                <Button
                  disabled={loading}
                  type="submit"
                  className="w-100"
                  style={{ marginTop: "2.5rem" }}
                >
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
        <section>
          <p>
            Already have an account?<Link to="/login">Log In</Link>
          </p>
        </section>
      </div>
    </>
  );
}

export default Signup;
