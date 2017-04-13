import React from 'react';

function Button (props) {
  return (
    <div className="Button" onClick={() => {props.onClick()}} onKeyDown={()=>props.onKeyDown()}>
      <p><i className={props.type} aria-hidden="true"></i></p>
    </div>
  )
}

module.exports = Button
