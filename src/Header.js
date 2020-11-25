import React, { Component } from "react";
import { Link } from "@reach/router";
import the_letter_A from "./../public/the_letter_A.jpg";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/" >
          <img src={the_letter_A} alt="The letter A" />
          <h1>Assandra Falls</h1>
        </Link>
      </header>
    );
  }
}

export default Header;
