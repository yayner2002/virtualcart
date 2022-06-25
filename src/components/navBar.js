import React from "react";

const NavBar = ({totalNumOfItems}) => {
  console.log("Navbar -rendered");
    return ( 
        <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://google.com">
            Total Items<span className="badge bg-secondary rounded-pill m-2">{totalNumOfItems}</span>
          </a>
        </div>
      </nav>
     );
}
 
export default NavBar;
