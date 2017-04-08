var React = require('react')
var Box = require('./Box')
var Button = require('./Button')
var PointsBar = require('./Points')

Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

function randomArray(size) {
  var array = [];
  var colors = ['red', 'orange', 'yellow', 'green', 'steelblue', 'purple'];
  for (var i = 0; i < size; i++) {
    var num = (Math.floor(Math.random()*colors.length));
    array.push(colors[num]);
  }
  return array
}

class BoxShell extends React.Component {
  constructor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'steelblue', 'purple'];
    var star = colors.sample();
    colors.splice(colors.indexOf(star), 1);
    var bomb = colors.sample();
    super();
    this.state = {
      boxes: randomArray(16),
      points: 0,
      star: star,
      bomb: bomb
    }
  }

  handleClick(i) {
    const colors = ['red', 'orange', 'yellow', 'green', 'steelblue', 'purple'];
    const boxes = this.state.boxes.slice();
    let array;
    if (i === "y4") {
      array = [0, 1, 2, 3]
    } else if (i === "y3") {
      array = [4, 5, 6, 7]
    } else if (i === "y2") {
      array = [8, 9, 10, 11]
    } else if (i === "y1") {
      array = [12, 13, 14, 15]
    } else if (i === "x1") {
      array = [0, 4, 8, 12]
    } else if (i === "x2") {
      array = [1, 5, 9, 13]
    } else if (i === "x3") {
      array = [2, 6, 10, 14]
    } else if (i === "x4") {
      array = [3, 7, 11, 15]
    }
    array.forEach(function(i) {
      let curColor = colors.indexOf(boxes[i]);
      if (curColor === colors.length-1) {
        curColor = 0
      } else {
        curColor ++
      }
      boxes[i] = colors[curColor];
    });
    this.setState(
      {boxes: boxes},
      function() {
        this.calculatePoints()
      }
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
            { [3, 2, 1, 0].map(function(i) {
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
          { [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(function(i) {
            return (
              <Box
                key={i}
                value={this.state.boxes[i]}
                star={this.state.star}
                bomb={this.state.bomb}
              />
            )
          }.bind(this)) }
          <div id="bottomButtonRow">
            <div className="ButtonShell">
              { [0, 1, 2, 3].map(function(i) {
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


        <PointsBar
          points={this.state.points}
          star={this.state.star}
          bomb={this.state.bomb}
        />
      </div>
    )
  }
}

module.exports = BoxShell
