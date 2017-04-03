var React = require('react');
// import './Box.css';

var boxStyles = {
}

class Box extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "Lovely!",
      backgroundColor: 'beige'
    }
  }

  changeColor() {
    this.setState({backgroundColor: 'blue'})
  }

  render() {
    return (
      <div className="Box" style={{background:this.state.backgroundColor}} onClick={() => { this.props.onClick(); this.changeColor()}}>
        {this.props.value || this.state.value}
      </div>
    );
  }
}

module.exports = Box
