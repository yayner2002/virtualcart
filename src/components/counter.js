import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
  };
// constructor () {
//   super()
//   this.handleInc = this.handleInc.bind(this)
// } manually bind event handlers with out arrow functions
handleInc = () =>  {
  this.setState( { value: this.state.value + 1})
}
  formatCount() {
    const { value } = this.state;
    return value === 0 ? "zero" : value;
  }

  render() {
    return (
       <div>
       <span className= {this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm" onClick={this.handleInc}>
          Increment
        </button>
        <button className="btn btn-danger m-2 btn-sm" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
       </div>
    );
  }


  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += (this.state.value === 0) ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
