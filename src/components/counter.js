import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    items: ['item 1', 'item 2', 'item 3', 'item 4']
  };
// constructor () {
//   super()
//   this.handleInc = this.handleInc.bind(this)
// } manually bind event handlers with out arrow functions
handleInc = () =>  {
  this.setState( { count: this.state.count + 1})
}
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
  conditionalRendering() {
    if(this.state.items.length === 0) return <p>No Items to display</p>
    return <ul>{this.state.items.map(listItem => <li key={listItem}>{listItem}</li>)}</ul>
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
