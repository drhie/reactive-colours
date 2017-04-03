var React = require('react');
// import './Box.css';

var boxStyles = {
}

class Box extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "Lovely!",
      backgroundColor: 'gray'
    }
  }

  changeColor() {
    let rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    let newColor;
    let curColor = rainbow.indexOf(this.state.backgroundColor)
    if (curColor < 0) {
      newColor = rainbow[0]
    } else {
      curColor ++
      newColor = rainbow[curColor]
    }
    this.setState({backgroundColor: newColor})
  }

  render() {
    return (
      <div className="Box" style={{background:this.state.backgroundColor}} onClick={() => { this.props.onClick(); this.changeColor() }}>
        <p>
          {this.props.value || this.state.value}
        </p>
      </div>
    );
  }
}

module.exports = Box
