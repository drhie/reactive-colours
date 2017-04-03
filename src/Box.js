var React = require('react');
// import './Box.css';

var boxStyles = {
  width: 100,
  height: 100,
  border: '1px solid black',
  display: 'inline-block',
  margin: 10,
  padding: 0,
  background: 'beige',
}

class Box extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "Lovely!",
    }
  }
  render() {
    return (
      <div className="Box" onClick={() => this.props.onClick()}>
        {this.props.value || this.state.value}
      </div>
    );
  }
}

module.exports = Box
