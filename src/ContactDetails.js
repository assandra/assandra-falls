import React, { Component } from "react";
import facebook from "./../public/facebook.svg";
import linkedIn from "./../public/linkedin-logo.svg";

class ContactDetails extends Component {
  render() {
    return(
      <div className="contact-icons">
       <a href="https://www.facebook.com/assandrafalls/">
          <img src={facebook} alt="Facebook Icon" />
          </a>
          <a href="www.linkedin.com/in/assandra-falls-777513a0">
          <img src={linkedIn} alt="LinkedIn Icon" />
          </a>
      </div>
    );
  }
}

export default ContactDetails;