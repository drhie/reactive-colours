import React from 'react';

class PointsBar extends React.Component {
  render() {
    var points = 0;
    return (
      <div className="statusBar">
        <h2>This round</h2>
        <p>Points: {this.props.points}</p>
        <p>Lives: {this.props.lives}</p>
        <p>
          <div className="Box" style={{background:this.props.star}}>
            <p>
              <i className="fa fa-star" />
            </p>
          </div>
          Stars (give you points!)
        </p>
        <p>
          <div className="Box" style={{background:this.props.bomb}}>
            <p>
              <i className="fa fa-bomb" />
            </p>
          </div>
          Bombs (avoid these!)
        </p>
      </div>
    );
  }
}

module.exports = PointsBar
