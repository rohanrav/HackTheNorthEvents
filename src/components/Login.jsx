/*----------------------------------------------------------*
 * Name: Events.jsx
 * Description: Contains the Login React Component
 * Author: Rohan Ravindran
 *----------------------------------------------------------*/

import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { Redirect } from "react-router-dom";

function Login(props) {
  // Setting state constants
  const [logIn, setLogIn] = useState(props.loggedIn);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handleLogin(event) handles the Form React Component on submit
  function handleLogin(event) {
    event.preventDefault();
    if (email === "test@htn.com" && password === "1234") {
      props.loginCallbackFromParent(true);
      setLogIn(true);
    } else {
      console.log("Incorrect Credentials");
    }
  }

  // onEmailChange(event) sets the email state when user input changes
  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  // onPasswordChange(event) sets the password state when user input changes
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
          <Form onSubmit={handleLogin}>
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
