var React = require('react')

var boxStyles = {
  width: 190,
  height: 190,
  border: '1px solid black',
  display: 'inline-block',
  margin: 0,
  padding: 0,
  background: 'beige',
}

var boxTextStyle = {
  'vertical-align': 'middle',

}

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "This is a box",
      clicked: false
    }
  }

  handleClick() {
    var clicked = this.state.clicked
    var newText = clicked ? "This is a clicked box" : "This is an unclicked box";
    this.setState({
      text: newText,
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <div style={boxStyles} onClick={() => this.handleClick()}>
        <p className={boxTextStyle}>
          {this.state.text}
        </p>
      </div>
    )
  }
}

module.exports = Box
