import React from 'react';

class PointsBar extends React.Component {
  livesCounter(lifeCount) {
    var hearts=[]
    for (let i=0; i < lifeCount; i ++) {
      hearts.push(<span className="heart"><i className="fa fa-heart" aria-hidden="true" /></span>)
    }
    return hearts
  }
  render() {
    var points = 0;
    return (
      <div className="statusBar">
        <p>{this.livesCounter(this.props.lives)}</p>
        <p>Points: {this.props.points}</p>
        <div>
          <div className="Box status" style={{background:this.props.star}}>
            <p>
              <i className="fa fa-star" />
            </p>
          </div>
          Stars (give you points!)
        </div>
        <div>
          <div className="Box status" style={{background:this.props.bomb}}>
            <p>
              <i className="fa fa-bomb" />
            </p>
          </div>
          Bombs (avoid these!)
        </div>
      </div>
    );
  }
}

module.exports = PointsBar
