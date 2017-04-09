import React from 'react';

function Start (props) {
  return (
    <div>
      <button className="Start Bank" onClick={()=>{props.onClick()}}>
        <h2 id="start-heading">START GAME</h2>
      </button>
      <button className="Start Bank" onClick={()=>{props.onClick()}}>
        <h2 id="start-heading">HOW TO PLAY</h2>
      </button>
      <p><em>Familiarize yourself with the colour board to the left. When you're ready, press START GAME.</em></p>
    </div>
  )
}

module.exports = Start
