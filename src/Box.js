var React = require('react')

var boxStyles = {
  width: 190,
  height: 190,
  border: '1px solid black',
  display: 'inline-block',
  margin: 0,
  padding: 0
}

var boxTextStyle = {
  'vertical-align': 'middle',

}

var Box = React.createClass({
  render: function() {
    return (
      <div style={boxStyles}>
        <p className={boxTextStyle}>
          This is a box.
        </p>
      </div>
    )
  }
})

module.exports = Box
