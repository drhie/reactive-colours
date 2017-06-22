var React = require('react');

function livesCounter(lifeCount) {
  var hearts=[]
  for (let i=0; i < lifeCount; i ++) {
    hearts.push(<span className="heart"><i className="fa fa-heart" aria-hidden="true" /></span>)
  }
  return hearts
}

function LifeBar(props) {
  return (
    <div className="statusBar">
      {livesCounter(props.lives-1)}
    </div>
  )
}

module.exports = LifeBar
