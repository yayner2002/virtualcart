import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  
  render() {
    return (
      <div>
        <div
          className="button btn btn-primary m-2 btn-sm"
          onClick={this.props.onReset}
        >
          Reset
        </div>
        {this.props.items.map((item) => (
          <Counter
            key={item.id}
            item={item}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
