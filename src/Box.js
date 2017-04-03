var React = require('react');
// import './Box.css';

var boxStyles = {
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
      <div className="Box" style={{background:this.props.backgroundColor}} onClick={() => this.props.onClick()}>
        {this.props.value || this.state.value}
      </div>
    );
  }
}

module.exports = Box
