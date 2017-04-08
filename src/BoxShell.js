var React = require('react')
var Box = require('./Box')
var Button = require('./Button')
var PointsBar = require('./Points')

function randomArray(size) {
  var array = [];
  var colors = ['red', 'orange', 'yellow', 'green', 'blue'];
  for (var i = 0; i < size; i++) {
    var num = (Math.floor(Math.random()*colors.length));
    array.push(colors[num]);
  }
  return array
}

class BoxShell extends React.Component {
  constructor() {
    super();
    this.state = {
      boxes: randomArray(9),
      points: 0,
      animation: "Box animated flipInY"
    }
  }

  handleClick(i) {
    const boxes = this.state.boxes.slice();
    let colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    let array;
    if (i === "y3") {
      array = [0, 1, 2]
    } else if (i === "y2") {
      array = [3, 4, 5]
    } else if (i === "y1") {
      array = [6, 7, 8]
    } else if (i === "x1") {
      array = [6, 3, 0]
    } else if (i === "x2") {
      array = [7, 4, 1]
    } else if (i === "x3") {
      array = [8, 5, 2]
    }
    array.forEach(function(i) {
      let curColor = colors.indexOf(boxes[i]);
      if (curColor === colors.length-1) {
        curColor = 0
      } else {
        curColor ++
      }
      boxes[i] = colors[curColor]
    });
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
              var node = "y"+(i+1);
              return (
                <Button
                  key={i}
                  type="fa fa-arrow-right"
                  node={node}
                  onClick={()=>this.handleClick(node)}
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
                animation={this.state.animation}
                value={this.state.boxes[i]}
              />
            )
          }.bind(this)) }
          <div id="bottomButtonRow">
            <div className="ButtonShell">
              { [0, 1, 2].map(function(i) {
                var node = "x"+(i+1);
                return (
                  <Button
                    key={i}
                    type="fa fa-arrow-up"
                    onClick={()=>this.handleClick(node)}
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
