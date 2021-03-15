import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Events from './Events';
import Filter from './Filter'
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ search, setSearch ] = useState('');
  const [ eventType, setEventType ] = useState('');

  return (
    <Container fluid="xs">
      <Router>
        <Nav />
          <h2 className="events-heading">Events</h2>
        <Row>
        
        <Col md={10}>
        <Events isLoggedIn={loggedIn}/>
        </Col>
        <Col md={2}>
          <Filter />
        </Col>
      </Row>
      </Router>
    </Container>
  );
}

export default App;