import React from 'react';

function Timer (props) {
  return (
    <div className="Timer">
      <h1>{props.timer}</h1>
    </div>
  )
}

module.exports = Timer
