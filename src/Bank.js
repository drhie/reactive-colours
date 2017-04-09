import React from 'react';

function Bank (props) {
  return (
    <button
      id="bankButton"
      tabIndex="0"
      className="Bank"
      onClick={()=>{props.onBank()}}
      onKeyDown={props.handleKeyDown}
      >
      <h2>Bank!</h2>
    </button>
  )
}

module.exports = Bank
