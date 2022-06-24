import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };
// constructor () {
//   super()
//   this.handleInc = this.handleInc.bind(this)
// } manually bind event handlers with out arrow functions
handleInc = (id) =>  {
  console.log(id) 
  this.setState( { value: this.state.value + 1})
}
  formatCount() {
    const { value } = this.state;
    return value === 0 ? "zero" : value;
  }

  render() {
    console.log(this.props)
    return (
       <div>
       <span className= {this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm" onClick={() => this.handleInc(1)}>
          Increment
        </button>
        <button className="btn btn-danger m-2 btn-sm" onClick={this.props.onDelete}>Delete</button>
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
