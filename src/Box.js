var React = require('react');

class Box extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: 'gray'
    }
  }

  generateContent() {
    if (this.props.star === this.props.value) {
      return <i className="fa fa-star" aria-hidden="true"></i>
    } else if (this.props.bomb === this.props.value) {
      return <i className="fa fa-bomb" aria-hidden="true"></i>
    } else {
      return <i style={{color:this.props.value}} className="fa fa-heart" aria-hidden="true"/>
    }
  }

  render() {
    return (
      <div className={"Box " +this.props.animation} style={{background:this.props.value}}>
        <p>
          {this.generateContent()}
        </p>
      </div>
    );
  }
}

module.exports = Box
