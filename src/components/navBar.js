import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="https://google.com">
            Navbar <span className="badge bg-secondary rounded-pill m-2">{this.props.totalNumOfItems}</span>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
