import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card, Container } from "react-bootstrap";

// function Signup() {
//   return (
//     <>
//       <h1
//         style={{
//           "font-size": "bold",
//           "margin-left": "45%",
//         }}
//       >
//         Sign Up
//       </h1>
//       <div className="signup-form">
//         <form type="submit">
//           <label htmlFor="name">Name: </label>
//           <input type="text" name="name" value="" id="name"></input>
//           <label htmlFor="email">Email: </label>
//           <input type="text" name="email" value="" id="email"></input>
//           <label htmlFor="password">PassWord: </label>
//           <input type="text" name="password" value="" id="password"></input>
//           <button type="submit">Sign Up</button>
//         </form>
//       </div>
//     </>
//   );
// }

function Signup() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirm = useRef();
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "bold",
          marginLeft: "45%",
        }}
      >
        Sign Up
      </h1>
      <div className="signup-form" style={{ "max-width": "400px" }}>
        <Container
          style={{
            "min-height": "100vh",
            "align-content": "center",
            "justify-content": "center",
          }}
        >
          <Card>
            <Card.Body>
              <Form>
                <Form.Group id="name">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control type="name" ref={name} required></Form.Control>
                </Form.Group>

                <Form.Group id="email">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    ref={email}
                    required
                  ></Form.Control>
                </Form.Group>

                <Form.Group id="password">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    ref={password}
                    required
                  ></Form.Control>
                </Form.Group>

                <Form.Group id="passwordconfirm">
                  <Form.Label>Confirm Password:</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirm}
                    required
                  ></Form.Control>
                </Form.Group>
                <Button
                  type="submit"
                  className="w-100"
                  style={{ "margin-top": "2.5rem" }}
                >
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default Signup;
