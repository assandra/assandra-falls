import React, { Component } from "react";
import ContactUsForm from "./ContactUsForm"

class ContactUsPage extends Component {
  render() {
    return (
      <div className="content">
        <h1>Contact Us</h1>
        <p>
          Interested in anything you have seen here, we would love to hear from
          you.
          <br />
          Either via Facebook, LinkedIn or the contact form below.
        </p>
<ContactUsForm />
      </div>
    );
  }
}

export default ContactUsPage;
