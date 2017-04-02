var React = require('react')
var Box = require('./Box')

var boxShellStyles = {
  width: 602,
  height: 602,
  display: 'inline-block'
}

class BoxShell extends React.Component {
  handleClick(i) {
    this.setState({
      text: 'This box has been clicked!'
    });
  }
  render() {
    // var arrayOfBoxes = [];
    // // for (var i=0; i<9; i++) {
    // //   arrayOfBoxes.push(<Box value={i+1} text={i+1} onClick={() => this.handleClick(i)} />)
    // // };

    return(
      <div style={boxShellStyles}>
        <Box value={1} text={1} onClick={() => this.handleClick()} />
      </div>
    )
  }
}

module.exports = BoxShell
