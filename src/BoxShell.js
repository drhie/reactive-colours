var React = require('react');
var Box = require('./Box');
var Button = require('./Button');
var PointsBar = require('./Points');
var Bank = require('./Bank');
var Timer = require('./Timer');
var Score = require('./Score');
var Start = require('./Start');
var LifeBar = require('./LifeBar');
import axios from 'axios';

Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

const DEFAULT_LIFE = 3;
const DEFAULT_POINTS = 8;
const DEFAULT_TIMER = 60;

function randomArray(size) {
  var array = [];
  var colors = ['red', 'orange', 'yellow', 'green', 'steelblue', 'mediumpurple'];
  for (var i = 0; i < size; i++) {
    var num = (Math.floor(Math.random()*colors.length));
    array.push(colors[num]);
  }
  return array
}

function generateStarBomb() {
  const colors = ['red', 'orange', 'yellow', 'green', 'steelblue', 'mediumpurple'];
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
      lives: DEFAULT_LIFE,
      urgent: 'black',
      gameStart: false,
      gameOver: false,
      animations: [],
      highScores: this.collectHighScorers(),
      glow: 'none',
    }
  }


  componentDidMount() {
    addEventListener('keypress',
      function(e) {
        if(e.keyCode === 13 || e.keyCode === 32 && this.state.gameStart) {
          this.handleBank()
        }
      }.bind(this)
    )
  }

  componentWillUnmount() {
    document.getElementById('gameOver').play();
    clearInterval(this.timerID);
  }

  startTimer() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  collectHighScorers() {
    var highScorers = []
    axios({
      method: 'get',
      dataType: 'json',
      url: 'https://reactive-colours.herokuapp.com/scores.json',
    })
    .then(function(response) {
      response.data.forEach(function(object) {
        var points = object.points;
        highScorers.push(points)
      })
    })
    .catch(function(error) {
    })
    return highScorers
  }

  tick() {
    var timeLeft = this.state.timer;
    timeLeft --
    if (timeLeft < 11 && timeLeft >= 0) {
      this.setState({urgent: 'red'});
      document.getElementById('tick').play();
    }
    if (timeLeft <= 0) {
      this.gameReset();
    }
    this.setState(
      {timer: timeLeft}
    )
  }

  handleClick(i) {
    const colors = ['red', 'orange', 'yellow', 'green', 'steelblue', 'mediumpurple'];
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
    const animations = Array(16);
    let points = this.state.points;
    let star = this.state.star;
    let bomb = this.state.bomb;
    let lives = this.state.lives;
    let bombExists = false;
    let bonusLife = 0;
    let bonusTime = 0;
    let glowState = null;
    var bankPoints = 0;
    this.state.boxes.forEach(function (box, i) {
      if (box === star) {
        animations[i] = "animated flipInY";
        bankPoints ++;
        bonusTime ++;
      } else if (box === bomb) {
        bankPoints --;
        bonusTime --;
        bombExists = true
      }
    });
    points += bankPoints;
    if (points < 0) { points = 0; }
    if (points-this.state.points >= DEFAULT_POINTS) {
      bonusLife ++;
      document.getElementById('lifeUp').play();
    }
    if (bombExists) {
      lives -= 1
      document.getElementById('bomb').play();
      glowState = "0 0 45px red";
    } else {
      if (bankPoints > 0) {
        glowState = "0 0 45px white"
        document.getElementById('bank').play();
      }
    }
    var starBomb = generateStarBomb()
    if (this.state.timer + bonusTime > 10) {
      this.setState({urgent: 'black'})
    }
    this.setState({
      animations: animations,
      points: points,
      boxes: randomArray(16),
      star: starBomb[0],
      bomb: starBomb[1],
      lives: lives + bonusLife,
      timer: Math.floor(this.state.timer + bonusTime),
      glow: glowState,
    }, function() {
      if (this.state.lives > 9) { this.boostTime() }
      if ((lives <= 0) || (this.state.timer <= 0)) { this.gameReset() }
    });
    this.resetAnimation();
  }

  boostTime() {
    let currentTime = this.state.timer;
    let bonusTime = 20;
    let points = this.state.points;
    let bonusPoints = 100;
    points += bonusPoints;
    this.setState({
      timer: currentTime + bonusTime,
      lives: DEFAULT_LIFE,
      points: points,
    })
    document.getElementById('timeBoost').play();
  }

  resetAnimation() {
    setTimeout(()=>{this.setState({
      animations: Array(16).fill(""),
    })}, 1000);
    setTimeout(()=>{this.setState({
      glow: null,
    })}, 200);
  }


  gameReset() {
    this.componentWillUnmount();
    this.postScore();
    this.setState({
      lives: DEFAULT_LIFE,
      urgent: 'black',
      gameStart: false,
      gameOver: true,
    })
  }

  handleStart() {
    this.startTimer();
    this.setState({
      gameStart: true,
      gameOver: false,
      boxes: randomArray(16),
      urgent: 'black',
      timer: DEFAULT_TIMER,
      points: 0
    })
  }

  handleKeyDown(event) {
    if (event.keyCode === 37) {
      alert('It worked!!')
    }
  }

  handleReplay() {
    this.handleStart();
  }

  handleMainMenu() {
    this.setState({
      points: 0,
      gameStart: false,
      gameOver: false,
      timer: -1,
      highScores: this.collectHighScorers()
    })
  }

  postScore() {
    var points = this.state.points
    axios({
      method: 'post',
      dataType: 'json',
      url: 'https://reactive-colours.herokuapp.com/scores.json',
      data: {
        'score': {
          'points': points
        }
      }
    })
    .then(function(response) {
      // console.log(response);
    })
    .catch(function(response) {
      // console.log(response);
    })
  }

  render() {
    var statusBarToggle;
    var bankButtonToggle;
    var scoreToggle;
    var gameOverToggle;
    if(this.state.gameStart) {
      statusBarToggle = <div>
        <Timer
          timer={this.state.timer}
          urgent={this.state.urgent}
          />
        <LifeBar
          lives={this.state.lives}
          />
        <PointsBar
          star={this.state.star}
          bomb={this.state.bomb}
          />
      </div>;
      bankButtonToggle =
      <Bank
        onBank={() =>this.handleBank()}
      />
    scoreToggle = <div id="scoreContainer" style={{boxShadow: this.state.glow}}>
                  <Score score={this.state.points} />
                </div>

    } else {
      statusBarToggle = <Start
        onClick={()=>this.handleStart()}
        highScores={this.state.highScores}/>
    }
    if (!this.state.gameOver) {
      gameOverToggle = (
        <div id="mobileContainer">
          <div id="gameContainer" style={{boxShadow: this.state.glow}}>
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
                      onKeyDown={()=>this.handleClick(node)}
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
                    animation={this.state.animations[i]}
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
            <div id="statContainer" style={{boxShadow: this.state.glow}}>
              {statusBarToggle}
            </div>
            {scoreToggle}
          </div>
        </div>
      )
    } else {
      gameOverToggle = (
        <div id="mobileContainer">
          <h1>GAME OVER</h1>
          <h3 id="score-heading">YOUR SCORE: {this.state.points}</h3>
          <button className="Bank" onClick={()=>this.handleReplay()}>
            <h2 id="start-heading">Play Again</h2>
          </button>
          <button className="Bank" onClick={()=>this.handleMainMenu()}>
            <h2 id="start-heading">Main Menu</h2>
          </button>
        </div>
      )
    }
    return(
      <div>
        {gameOverToggle}
      </div>
    )
  }

}

module.exports = BoxShell
