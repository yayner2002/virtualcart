import "./App.css";
import NavBar from "./components/navBar";
import Counters from "./components/counters";
import React, { Component } from 'react'


class App extends Component {
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
  // constructor(props){
  //   super(props);
  //   console.log("App - constructor");
  //   this.state = this.props.state;
  // }
  componentDidMount() {
    //called after the component is rendered, and we can make an ajax call
    console.log("App - mounted");
  }
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
    console.log("App -rendered");
    return (<React.Fragment>
      <NavBar totalNumOfItems={this.state.items.filter(item => item.value > 0).length} />
      <main className="container">
        <Counters
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onReset={this.handleReset}
          items={this.state.items}
        />
      </main>
    </React.Fragment>);
  }
}
 
export default App;
