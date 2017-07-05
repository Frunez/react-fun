import React, { Component } from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOn: true};
    this.thing = this.thing.bind(this);
  }
  thing() {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }));
  }
  thisSaysSomething() {
    if (!this.state.isOn) {
      return (<div className="square here">Omg this is here</div>); 
    }   
    return (<div className="square there">Not anymore</div>);
  }
  render(){
    return (
      <div className="button">
        <button onClick={this.thing}>
          {this.state.isOn ? 'open' : 'close'}
        </button>
        {this.thisSaysSomething()}
      </div>
    );
  }
};

export default Button;
