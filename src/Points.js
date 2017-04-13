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
        <h3 style={{marginBottom:0, fontFamily: 'Press Start 2P', textAlign: 'center'}}>CURRENT REACTIVE COLOURS</h3>
        <div style={{display:"flex", justifyContent: "space-around"}}>
          <div className="Box status" style={{background:this.props.star, width:50, height:50}}>
            <p>
              <i className="fa fa-star" />
            </p>
          </div>
          <div className="Box status" style={{background:this.props.bomb, width:50, height:50}}>
            <p>
              <i className="fa fa-bomb" />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = PointsBar
