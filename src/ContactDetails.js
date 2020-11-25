import React, { Component } from "react";
import facebook from "./../public/facebook.svg";
import linkedIn from "./../public/linkedin-logo.svg";
import twitter from "./../public/twitter-sign.svg";

class ContactDetails extends Component {
  render() {
    return(
      <div className="contact-icons">
        <div className="facebook">
       <a href="https://www.facebook.com/assandrafalls/">
          <img src={facebook} alt="Facebook Icon" />
          </a>
          </div>
          <div className="linkedIn">
          <a href="www.linkedin.com/in/assandra-falls-777513a0">
          <img src={linkedIn} alt="LinkedIn Icon" />
          </a>
          </div>
          <div className="twitter">
          <a href="www.linkedin.com/in/assandra-falls-777513a0">
          <img src={twitter} alt="Twitter Icon" />
          </a>
          </div>
      </div>
    );
  }
}

export default ContactDetails;