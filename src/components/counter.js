import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 10,
    items: ['item 1', 'item 2', 'item 3', 'item 4']
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }

  render() {

    return (
      <React.Fragment>
        <span className= {this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">
          Increment
        </button>
        <ul>
          {this.state.items.map(listItem => <li key={listItem}>{listItem}</li>)}
        </ul>
      </React.Fragment>
    );
  }


  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
