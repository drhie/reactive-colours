import React from 'react';

function Bank (props) {
  return (
    <button className="Bank" onClick={() => {props.onBank()}} >
      <h2>Bank!</h2>
    </button>
  )
}

module.exports = Bank
