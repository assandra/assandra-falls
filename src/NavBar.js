import React, { Component } from "react";
import { Link } from "@reach/router";

class NavBar extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/software-art">
            <li>Software Art</li>
          </Link>
          <Link to="/contracting-and-freelancing">
            <li>Contracting & Freelancing</li>
          </Link>
          <Link to="/contact-us">
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default NavBar;
