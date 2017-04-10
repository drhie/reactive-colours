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
    return (
      <div>
        <div className="statusBar">
          {this.livesCounter(this.props.lives-1)}
        </div>
        <div>
          <div className="Box status" style={{background:this.props.star}}>
            <p>
              <i className="fa fa-star" />
            </p>
          </div>
          Stars (the more the better!)
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
