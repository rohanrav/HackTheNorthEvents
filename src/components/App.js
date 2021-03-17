/*----------------------------------------------------------*
 * Name: App.js
 * Description: Main React Application File (Contains Routing)
 * Author: Rohan Ravindran
 *----------------------------------------------------------*/

import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Nav from "./Nav";
import Login from "./Login";
import EventDetail from "./EventDetail";
import Home from "./Home";

function App() {
  // Setting state constants
  const [loggedIn, setLoggedIn] = useState(false);

  // logInCallBack(data) uses calls setLoggedIn to update
  //   the state of loggedIn
  const logInCallBack = (dataFromChild) => {
    setLoggedIn(dataFromChild);
  };

  return (
    <Router>
      <Container fluid="xs">
        <Nav loggedIn={loggedIn} />
        <Switch>
          <Route
            path="/login"
            render={(props) => (
              <Login
                {...props}
                loggedIn={loggedIn}
                loginCallbackFromParent={logInCallBack}
              />
            )}
          />
          <Route
            path="/"
            exact
            render={(props) => <Home {...props} loggedIn={loggedIn} />}
          />
          <Route
            path="/event/:id"
            render={(props) => <EventDetail {...props} loggedIn={loggedIn} />}
          />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
