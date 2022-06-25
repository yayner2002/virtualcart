import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - rendered");
    const { onReset, items, onIncrement, onDelete } = this.props;
    return (
      <div>
        <div className="button btn btn-primary m-2 btn-sm" onClick={onReset}>
          Reset
        </div>
        {items.map((item) => (
          <Counter
            key={item.id}
            item={item}
            onIncrement={onIncrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
