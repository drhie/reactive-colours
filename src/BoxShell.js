var React = require('react')
// var Box = require('./Box')

var boxShellStyles = {
  width: 602,
  height: 602,
  display: 'inline-block'
}

var boxStyles = {
  width: 100,
  height: 100,
  border: '1px solid black',
  display: 'inline-block',
  margin: 0,
  padding: 0,
  background: 'beige',
}

var boxTextStyle = {
  'vertical-align': 'middle',

}

function Box(props) {
  return (
    <div style={boxStyles} onClick={() => props.onClick()}>
      {props.value}
    </div>
  );
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
    boxes[i] = "This Box has been Clicked!";
    this.setState({
      boxes: boxes
    });
  }
  renderBox(i) {
    return <Box value={this.state.boxes[i]} onClick={() => this.handleClick(i)} />;
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
