import React from 'react';

var pointsBarStyle = {
  border: '1px solid black',
  width: '80%',
  height: 100,
  margin: '20px auto',
  borderRadius: 20
}

class PointsBar extends React.Component {
  render() {
    var points = 0;
    return (
      <div style={pointsBarStyle}>
        <h2>This round</h2>
        <p style={{background:this.props.star}}>Star Color: </p>
        <p style={{background:this.props.bomb}}>Bomb Color: </p>
        <p>Points: {this.props.points}</p>
      </div>
    );
  }
}

module.exports = PointsBar
