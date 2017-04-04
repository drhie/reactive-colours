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

  render() {
    return(
      <div>
        { [0, 1, 2, 3, 4, 5].map(function(i) {
          return this.renderBox(i);
          <Box
            key={i}
            value={this.state.boxes[i]}
            onClick={() => {this.handleClick(i); this.calculatePoints()}}
          />
        }.bind(this)) }

        <PointsBar points={this.state.points} />
      </div>
    )
  }
}

module.exports = BoxShell
