import React from 'react';

function Button (props) {
    return (
      <div className="Button" onClick={() => {props.onClick()} } >
        <p>{props.node}</p>
      </div>
    )
}

module.exports = Button
