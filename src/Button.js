import React from 'react';

function Button (props) {
    return (
      <button className="Button" onClick={() => {props.onClick()} } >
        <p><i className={props.type} aria-hidden="true"></i></p>
      </button>
    )
}

module.exports = Button
