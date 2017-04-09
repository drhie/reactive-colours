var React = require('react')
var Box = require('./Box')
var Button = require('./Button')
var PointsBar = require('./Points')
var Bank = require('./Bank')
var Timer = require('./Timer')
var Score = require('./Score')
var Start = require('./Start')

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

function generateStarBomb() {
  const colors = ['red', 'orange', 'yellow', 'green', 'steelblue', 'purple'];
  var star = colors.sample();
  colors.splice(colors.indexOf(star), 1);
  var bomb = colors.sample();
  return [star, bomb]
}

class BoxShell extends React.Component {
  constructor() {
    super();
    var starBomb = generateStarBomb();
    this.state = {
      boxes: randomArray(16),
      star: starBomb[0],
      bomb: starBomb[1],
      points: 0,
      lives: 3,
      urgent: 'black',
      gameStart: false
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    var timeLeft = this.state.timer;
    timeLeft --
    if (timeLeft < 11) {
      this.setState({urgent: 'red'})
    }
    if (timeLeft < 1) {
      timeLeft = 0;
      this.gameReset()
    }
    this.setState(
      {timer: timeLeft}
    )
  }

  handleKeyPress(e) {
    if(e.charCode === 13) {
      console.log("BANKED!")
    }
  }

  gameReset() {
    this.setState({
      points: 0,
      lives: 3,
      urgent: 'black',
      gameStart: false
    })
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
      {boxes: boxes}
    );
  }

  handleBank() {
    console.log("Bank!");
    let points = this.state.points;
    let star = this.state.star;
    let bomb = this.state.bomb;
    let lives = this.state.lives;
    let bombExists = false;
    let bonusLife = 0;
    let bonusTime = 0;
    let boxColor;
    this.state.boxes.forEach(function (box) {
      if (box === star) {
        points ++;
        bonusTime ++;
      } else if (box === bomb) {
        points --;
        bonusTime --;
        bombExists = true
      }
    });
    if (points < 0) { points = 0 }
    if (points-this.state.points > 9) { bonusLife ++ }
    if (bombExists) { lives -= 1 }
    var starBomb = generateStarBomb()
    if (this.state.timer + bonusTime > 10) {
      this.setState({urgent: 'black'})
    }
    this.setState({
      points: points,
      boxes: randomArray(16),
      star: starBomb[0],
      bomb: starBomb[1],
      lives: lives + bonusLife,
      timer: Math.floor(this.state.timer + bonusTime),
    })
    if (lives <= 0) {
      this.gameReset()
    }
  }

  handleStart() {
    this.setState({
      gameStart: true,
      boxes: randomArray(16),
      timer: 60,
      points: 0
    })
  }

  render() {
    var statusBarToggle;
    var bankButtonToggle;
    var scoreToggle;
    if(this.state.gameStart) {
      statusBarToggle = <div>
        <Timer
          timer={this.state.timer}
          urgent={this.state.urgent}/>
        <PointsBar
          star={this.state.star}
          bomb={this.state.bomb}
          lives={this.state.lives}
          />
      </div>;
      bankButtonToggle = <Bank onBank={() =>this.handleBank()} />
      scoreToggle = <div id="scoreContainer">
                  <Score score={this.state.points} />
                </div>

    } else {
      statusBarToggle = <Start
        onClick={()=>this.handleStart()}/>
    }
    return(
      <div>
        <div id="gameContainer">
          <h2 id="colorBoard">COLOUR BOARD</h2>
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
                    onKeyPress = {() =>this.handleKeyPress()}
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
          {bankButtonToggle}
        </div>
        <div id="rightDiv">
          <div id="statContainer">
            {statusBarToggle}
          </div>
          {scoreToggle}
        </div>
      </div>
    )
  }
}

module.exports = BoxShell
