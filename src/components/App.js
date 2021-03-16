import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Login from './Login';
import EventDetail from './EventDetail';
import Home from './Home';
import { Container } from 'react-bootstrap';

function App() {
  const [ loggedIn, setLoggedIn ] = useState(false);

  const logInCallBack = (dataFromChild) => {
    setLoggedIn(dataFromChild);
  }

  return (
    <Container fluid="xs">
      <Router>
        <Nav loggedIn={loggedIn} />
        <Switch>
          <Route path="/login" render={(props) => (<Login {...props} loggedIn={loggedIn} loginCallbackFromParent={logInCallBack} />)}/>
          <Route path="/" exact render={(props) => (<Home {...props} loggedIn={loggedIn}/>)}/>
          <Route path="/event/:id" render={(props) => (<EventDetail {...props} />)}/>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;