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
        <div id="topbar">
          <h2 id="title">Reactive Colours</h2>
          <p>This is a David Rhie web app</p>
        </div>
        <div id="shell">
          <p className="App-intro">
            <strong>Instructions:</strong> Use the controls to fill the colour board with as many stars as possible. Bank the stars to collect points and extra time, but watch out: There better not be any bombs on there when you bank, or you'll be sorry!
          </p>
          <BoxShell />
        </div>
      </div>
    );
  }
}

export default App;
