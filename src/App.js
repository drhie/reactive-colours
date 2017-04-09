import React, { Component } from 'react';
import './App.css';
// var ReactDOM = require('react-dom')

var BoxShell = require('./BoxShell')

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
            <strong>REACTIVE COLOURS</strong> is a simple puzzle game where you rack up your score by collecting as many stars on the board as possible while avoiding the bombs.
          </p>
          <BoxShell />
        </div>
      </div>
    );
  }
}

export default App;
