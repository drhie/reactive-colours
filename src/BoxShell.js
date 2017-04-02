var React = require('react')
var Box = require('./Box')

var boxShellStyles = {
  width: 602,
  height: 602,
  display: 'inline-block'
}

var BoxShell = React.createClass({
  render: function() {
    return(
      <div style={boxShellStyles}>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />

      </div>
    )
  }
})

module.exports = BoxShell
