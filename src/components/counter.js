import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <React.Fragment>
        <span className="badge bg-success m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">
          Increment
        </button>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
