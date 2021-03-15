import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Events from './Events';

function App() {
  const [ loggedIn, setLoggedIn ] = useState(false);

  return (
    <div>
      <Router>
        <Nav />
        <Events isLoggedIn={loggedIn}/>
      </Router>
    </div>
  );
}

export default App;