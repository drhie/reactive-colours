import React from 'react';

function Button (props) {
    return (
      <div className="Button">
        <p>{props.node}</p>
      </div>
    )
}

module.exports = Button
