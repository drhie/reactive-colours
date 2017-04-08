var React = require('react');
// import './Box.css';

class Box extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "o",
      backgroundColor: 'gray'
    }
  }

  render() {
    return (
      <div className="Box" style={{background:this.props.value}}>
        <p>
          {this.props.value || this.state.value}
        </p>
      </div>
    );
  }
}

module.exports = Box
