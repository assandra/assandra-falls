import React from "react";
import the_letter_A from "./../public/the_letter_A.jpg";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={the_letter_A} alt="The letter A" />
        <h1>Assandra Falls</h1>
      </div>
    );
  }
}

export default Header;
