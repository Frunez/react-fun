import React, { Component } from "react";

class MovingBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: "200px",
      cursor: 0,
      result: []
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    const { cursor, position, result } = this.state;
    if (e.keyCode === 38 && cursor > 0) {
      this.setState( prevState => ({
        cursor: prevState.cursor - 1
      }));
    } else if (e.keyCode === 40 && cursor <  result.length - 1) {
      this.setState( prevState => ({
        cursor: prevState.cursor + 1
      }))
    }
  }
  render() {
    const { cursor } = this.state
    const result = [{name: "hello"},{name: "hi"},{name:"hey"}]

    return(
      <container>
        <div onKeyDown={ this.handleKeyDown }/>
        <ul>
          {
            result.map((name, i) => (
              <button
                label={i.name}
                key={ i }
                className={`${cursor === i ? 'active' : ''}`}
              >
                <span>{ result.name }</span>
              </button>
            ))
          }
        </ul>
      </container>
    )
  }
}

export default MovingBox;