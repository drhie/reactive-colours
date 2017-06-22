var React = require('react');

class HighScore extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    let firstPlace = this.props.highScores[0];
    let secondPlace = this.props.highScores[1];
    let thirdPlace = this.props.highScores[2];
    return (
      <div>
        <h5 id="highScore">High Score: {firstPlace}</h5>
      </div>
    )
  }
}

module.exports = HighScore
