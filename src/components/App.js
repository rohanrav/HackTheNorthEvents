import React, { Component, useState } from 'react';
import axios from 'axios';

export default class App extends Component {
  // constructor() {
  //   super();
  // }

  componentDidMount = () => {
    axios.get("/test").then(response => {
      console.log(response.data)
    })
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}