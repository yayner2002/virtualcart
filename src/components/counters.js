import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    items: [
      {
        id: 1,
        value: 0,
      },
      {
        id: 2,
        value: 40,
      },
      {
        id: 3,
        value: 0,
      },
      {
        id: 4,
        value: 0,
      },
    ],
  };
  handleIncrement = (counter) => {
    const items = [...this.state.items];
    const indexOfItemTOInc = items.indexOf(counter);
    items[indexOfItemTOInc] = { ...counter };
    items[indexOfItemTOInc].value++;
    this.setState({ items });
  };
  handleReset = () => {
    const items = this.state.items.map((item) => {
      item.value = 0;
      return item;
    });
    this.setState({ items });
  };
  handleDelete = (deletedId) => {
    const itemsAfterDelete = this.state.items.filter(
      (item) => item.id !== deletedId
    );
    this.setState({ items: itemsAfterDelete });
  };
  render() {
    return (
      <div>
        <div
          className="button btn btn-primary m-2 btn-sm"
          onClick={this.handleReset}
        >
          Reset
        </div>
        {this.state.items.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
