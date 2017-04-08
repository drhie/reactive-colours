var React = require('react')
var Box = require('./Box')
var Button = require('./Button')
var PointsBar = require('./Points')


class BoxShell extends React.Component {
  constructor() {
    super();
    this.state = {
      boxes: Array(9).fill(null),
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
    this.setState(
      {boxes: boxes},
      function() {this.calculatePoints()}
    );
  }

  calculatePoints(){
    let points = this.state.points;
    let mutualColor = 0;
    let boxColor;
    this.state.boxes.forEach(function (box, index) {
      if (index === 0) {
        boxColor = box
      }
      if (box === boxColor) {
        mutualColor ++
      }
    });
    if (this.state.boxes.length === mutualColor) {
      // alert("All the colors match!");
      mutualColor = 0;
      points  += 20
    }
    this.setState({points: points})
  }

  render() {
    return(
      <div id="gameContainer">

        <div id="leftButtonRow">
          <div className="ButtonShell">
            { [2, 1, 0].map(function(i) {
              return (
                <Button
                  key={i}
                  node={"y"+(i+1)}
                  onClick={()=>this.handleClick(i)}
                  />
              )
            }.bind(this)) }
          </div>
        </div>

        <div className="BoxShell">
          { [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function(i) {
            return (
              <Box
                key={i}
                value={this.state.boxes[i]}
              />
            )
          }.bind(this)) }
          <div id="bottomButtonRow">
            <div className="ButtonShell">
              { [0, 1, 2].map(function(i) {
                return (
                  <Button
                    key={i}
                    node={"x"+(i+1)}
                    onClick={()=>this.handleClick(i)}
                    />
                )
              }.bind(this))}
            </div>
        </div>

        </div>


        <PointsBar points={this.state.points} />
      </div>
    )
  }
}

module.exports = BoxShell
