var React = require('react')
var Box = require('./Box')

var boxShellStyles = {
  width: 602,
  height: 602,
  display: 'inline-block'
}


var boxTextStyle = {
  'vertical-align': 'middle',

}

class BoxShell extends React.Component {
  constructor() {
    super();
    this.state = {
      boxes: Array(6).fill(null)
    }
  }
  handleClick(i) {
    const boxes = this.state.boxes.slice();
    boxes[i] = "X";
    this.setState({
      boxes: boxes,
      backgroundColor: 'blue'
    });
  }
  renderBox(i) {
    return <Box value={this.state.boxes[i]} backgroundColor={this.state.backgroundColor} onClick={() => this.handleClick(i)} />;
  }
  render() {
    return(
      <div>

        {this.renderBox(0)}
        {this.renderBox(1)}
        {this.renderBox(2)}
        {this.renderBox(3)}
        {this.renderBox(4)}
        {this.renderBox(5)}

      </div>
    )
  }
}

module.exports = BoxShell
