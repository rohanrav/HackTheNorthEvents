import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Events from './Events';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [ loggedIn, setLoggedIn ] = useState(false);

  return (
    <Container fluid="xs">
      <Router>
        <Nav />
        <Row>
        <Col md={10} style={{backgroundColor: 'red'}}>
        <Events isLoggedIn={loggedIn}/>
        </Col>
        <Col md={2} style={{backgroundColor: 'blue'}}>
          xs=6 md=4
        </Col>
      </Row>
      </Router>
    </Container>
  );
}

export default App;