import React, { Component } from "react";
import ContactDetails from "./ContactDetails";
import ContactUsForm from "./ContactUsForm";
import GoogleApiWrapper from "./MapContainer";

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
        <ContactDetails />
      
        <p> You can find us in the following locations</p>
        <GoogleApiWrapper />
      </div>
    );
  }
}

export default ContactUsPage;
