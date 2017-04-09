import React from 'react';

class Start extends React.Component {
  constructor() {
    super();
    this.state = {
      howtoplay: false
    }
  }

  render() {
    var toggleStart;
    if(!this.state.howtoplay) {
      toggleStart =
        <div>
          <button className="Start Bank" onClick={()=>{this.props.onClick()}}>
            <h2 id="start-heading">START GAME</h2>
          </button>
          <button className="Start Bank" onClick={()=>{this.setState({howtoplay:true})}}>
            <h2 id="start-heading">HOW TO PLAY</h2>
          </button>
          <p><em>Familiarize yourself with the colour board to the left. When you are ready, press START GAME.</em></p>
        </div>
    } else {
      toggleStart =
        <div>
          <div className="instructionSection">
            <p className="instructions">The colours on the <strong>Colour Board</strong> will always change in a rainbow sequence.</p>
            <div className="Box status" style={{background:'red'}} />
            <div className="Box status" style={{background:'orange'}} />
            <div className="Box status" style={{background:'yellow'}} />
            <div className="Box status" style={{background:'green'}} />
            <div className="Box status" style={{background:'steelblue'}} />
            <div className="Box status" style={{background:'purple'}} />
          </div>
          <div className="instructionSection" style={{display:'inline-block'}}>
            <div className="diagram">
              <div className="Button status">
                <p><i className="fa fa-arrow-right" aria-hidden="true" /></p>
              </div>
              <div className="Button status">
                <p><i className="fa fa-arrow-up" aria-hidden="true" /></p>
              </div>
            </div>
            <p className="arrow instructions">Use the arrow buttons to change the corresponding row of squares. All squares on the selected row will change colours.</p>
          </div>
          <div className="instructionSection">
            <p className="instructions"><strong>BANK</strong> the stars <i className="fa fa-star"/> on the board to increase your score and time. But if you <strong>BANK</strong> when there's a bomb <i className="fa fa-bomb" /> on the board too, you will lose 1 life, and your time and score will drop.</p>
          </div>
          <div className="instructionSection">
            <p className="instructions">The game is over when you either lose all of your lives or run out of time.</p>
          </div>
          <button className="Start Bank" onClick={()=>{this.setState({howtoplay:false})}}>
            <h2 id="start-heading">RETURN</h2>
          </button>
        </div>

    }
    return (
      <div>
        {toggleStart}
      </div>
    )
  }
}

module.exports = Start
