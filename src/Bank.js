import React from 'react';
function Bank (props) {
  return (
    <button
      id="bankButton"
      className="Bank"
      onClick={()=>{props.onBank()}}
      tabIndex="0"
      >
      <h2 style={{margin:10}}>
        Bank!
        <div id="spacebar">(Press SPACEBAR)</div>
      </h2>

    </button>
  )
}

module.exports = Bank
