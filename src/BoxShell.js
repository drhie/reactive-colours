var React = require('react')
var Box = require('./Box')
var PointsBar = require('./Points')

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
      boxes: Array(6).fill(null),
      points: 0,
    }
  }
  handleClick(i) {
    const boxes = this.state.boxes.slice();
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    let curColor = colors.indexOf(boxes[i]);
    if (curColor < 0) {
      curColor = 0
    } else {
      curColor ++
    }
    boxes[i] = colors[curColor];
    this.setState({
      boxes: boxes,
    });
  }
  renderBox(i) {
    return <Box value={this.state.boxes[i]} onClick={() => {this.handleClick(i); this.calculatePoints()}} />;
  }

  calculatePoints(){
    let points = this.state.points;
    let mutualColor = 0;
    let boxColor;
    this.state.boxes.forEach(function (box, index) {
      if (index == 0) {
        boxColor = box
      }
      if (box == boxColor) {
        mutualColor ++
      }
    });
    if (this.state.boxes.length == mutualColor) {
      alert("All the colors match!");
      mutualColor = 0;
      points  += 20
    }
    this.setState({
      points: points
    })
  }

  renderPointsBar() {
    return <PointsBar points={this.state.points} />
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
        {this.renderPointsBar()}
      </div>
    )
  }
}

module.exports = BoxShell
