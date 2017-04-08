import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// var ReactDOM = require('react-dom')

var BoxShell = require('./BoxShell')
var PointsBar = require('./Points')

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React to the Colors of the Rainbow</h2>
        </div>
        <p className="App-intro">
          Bank as many stars as possible, but there better not be any bombs in that bank, or it will cost you a life, points and time!
        </p>
        <BoxShell />
      </div>
    );
  }
}


export default App;
