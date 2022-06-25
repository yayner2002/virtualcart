import React from "react";

const NavBar = ({totalNumOfItems}) => {
  console.log("Navbar -rendered");
    return ( 
        <nav class="navbar bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="https://google.com">
            Total Items<span className="badge bg-secondary rounded-pill m-2">{totalNumOfItems}</span>
          </a>
        </div>
      </nav>
     );
}
 
export default NavBar;
