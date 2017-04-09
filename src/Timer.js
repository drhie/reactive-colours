import React from 'react';

function Timer (props) {
  return (
    <div className="Timer">
      <h2 id="timer-heading">TIME:</h2>
      <h1 id="timer-count" style={{color:props.urgent}}>{props.timer}</h1>
    </div>
  )
}

module.exports = Timer
