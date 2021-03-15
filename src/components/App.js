import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Card from './Card';

function App() {
  const [ loggedIn, setLoggedIn ] = useState(false);

  return (
    <div>
      <Router>
        <Nav />
        <Card style={{ marginTop: '50px' }}
            name="Test Name" 
            startTime="9 AM 2022" 
            description="Use any of the available button style types to quickly create a styled button. Just modify the variant prop."
            />
      </Router>
    </div>
  );
}

export default App;