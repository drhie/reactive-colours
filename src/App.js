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
        </div>
        <div id="shell">
          <p className="App-intro">
            Rack up the highest score by collecting as many stars on the board as you can before time runs out, but don't collect bombs, or you'll be sorry!
          </p>
          <BoxShell />
        </div>
      </div>
    );
  }
}


export default App;
