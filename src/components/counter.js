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
  conditionalRendering() {
    if(this.state.items.length === 0) return <p>No Items to display</p>
    return <ul>{this.state.items.map(listItem => <li key={listItem}>{listItem}</li>)}</ul>
  }
  handleInc() {
    console.log('button Clicked', this)
  }

  render() {

    return (
      <React.Fragment>
        <span className= {this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm" onClick={this.handleInc}>
          Increment
        </button>
        <div>
          {this.state.items.length === 0 && "Please Add new items"}
          {this.conditionalRendering()}
        </div>
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
