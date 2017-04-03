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

  render() {
    return (
      <div className="Box" style={{background:this.props.value}} onClick={() => { this.props.onClick() } }>
        <p>
          {this.props.value || this.state.value}
        </p>
      </div>
    );
  }
}

module.exports = Box
