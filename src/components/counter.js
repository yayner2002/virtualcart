import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 10,
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }

  render() {
    let classes = "badge m-2 bg-";
    classes += ( this.state.count === 0 ) ? "warning" : "success";

    return (
      <React.Fragment>
        <span className= {classes}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">
          Increment
        </button>
      </React.Fragment>
    );
  }

}

export default Counter;
