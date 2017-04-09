import React from 'react';

function Score (props) {
  return (
    <div>
      <h2 id="score-heading">SCORE: </h2>
      <h1 id="score-count">{props.score}</h1>
    </div>
  )
}

module.exports = Score
