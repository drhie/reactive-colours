import React from 'react';

var pointsBarStyle = {
  border: '1px solid black',
  width: '80%',
  height: 100,
  margin: '20px auto',
  'border-radius': 20
}

class PointsBar extends React.Component {
  render() {
    var points = 0;
    return (
      <div style={pointsBarStyle}>
        <p>Points: {points}</p>
      </div>
    );
  }
}

module.exports = PointsBar
