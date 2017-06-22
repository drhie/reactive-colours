import React from 'react';

function PointsBar(props) {
  return (
    <div>
      <div className="currentReactiveColours">
        <h3 style={{marginBottom:0, fontFamily: 'Press Start 2P', textAlign: 'center'}}>CURRENT REACTIVE COLOURS</h3>
        <div style={{display:"flex", justifyContent: "space-around"}}>
          <div className="Box status" style={{background:props.star, width:50, height:50}}>
            <p>
              <i className="fa fa-star" />
            </p>
          </div>
          <div className="Box status" style={{background:props.bomb, width:50, height:50}}>
            <p>
              <i className="fa fa-bomb" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

module.exports = PointsBar
