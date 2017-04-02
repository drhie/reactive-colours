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
      text: "This is a box"
    }
  }
  render() {
    return (
      <div style={boxStyles}>
        <p className={boxTextStyle}>
          {this.state.text}
        </p>
      </div>
    )
  }
}

module.exports = Box
