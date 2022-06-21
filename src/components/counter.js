import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0
    }
  render() {
    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state
    return count === 0 ? 'zero' : count
  }
}

export default Counter;
