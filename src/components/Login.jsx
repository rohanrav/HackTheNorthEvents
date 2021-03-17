/*----------------------------------------------------------*
 * Name: Events.jsx
 * Description: Contains the Login React Component
 * Author: Rohan Ravindran
 *----------------------------------------------------------*/

import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { Redirect } from "react-router-dom";

function Login(props) {
  const [logIn, setLogIn] = useState(props.loggedIn);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleClick(event) {
    console.log(email);
    console.log(password);
    event.preventDefault();
    if (email === "test@htn.com" && password === "1234") {
      props.loginCallbackFromParent(true);
      setLogIn(true);
    } else {
      console.log("Incorrect Credentials");
    }
  }

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  if (logIn) {
    return <Redirect to="/" />;
  } else {
    return (
      <Container className="login-form">
        <Card className="login-card">
          <h1>Login</h1>
          <Form onSubmit={handleClick}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={onEmailChange}
                value={email}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={onPasswordChange}
                value={password}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Log In
            </Button>
          </Form>
        </Card>
      </Container>
    );
  }
}

export default Login;
