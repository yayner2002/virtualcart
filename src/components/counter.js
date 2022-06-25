import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState){
    console.log("PrevProps" , prevProps);
    console.log("PrevState" , prevState);
    if(prevProps.item.value !== this.props.item.value){
      // ajax call and get  new data from the server
    }
  }
  componentWillUnmount(){
    console.log("item - unmount");
    // this method is called before the item/componnet is removed
  }
// constructor () {
//   super()
//   this.handleInc = this.handleInc.bind(this)
// } manually bind event handlers with out arrow functions
  formatCount() {
    const { value } = this.props.item;
    return value === 0 ? "zero" : value;
  }

  render() {
    console.log("Counter -rendered");
    return (
       <div>
       <span className= {this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm" onClick={() => this.props.onIncrement(this.props.item)}>
          Increment
        </button>
        <button className="btn btn-danger m-2 btn-sm" onClick={() => this.props.onDelete(this.props.item.id)}>Delete</button>
       </div>
    );
  }


  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += (this.props.item.value === 0) ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
