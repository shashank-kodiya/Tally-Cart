import React, { Component } from "react";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">

            <a className="navbar-brand" href="/">
              Tally Cart
            </a>

          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;