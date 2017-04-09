import React, { Component } from 'react';
import './App.css';
// var ReactDOM = require('react-dom')

var BoxShell = require('./BoxShell')

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="topbar">
          <h2 id="title">REACTIVE COLOURS</h2>
          <p>This is a David Rhie web app</p>
        </div>
        <div id="shell">
          <p className="App-intro">
            <strong>REACTIVE COLOURS</strong> is a simple puzzle game where you build your score by collecting as many stars on the board as possible while avoiding the bombs.
            <br /><em>(This app was built using React.js, a front-end Javascript framework)</em>
          </p>
          <BoxShell />
        </div>
      </div>
    );
  }
}


export default App;
