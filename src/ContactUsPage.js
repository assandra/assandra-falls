import React, { Component } from "react";
import ContactDetails from "./ContactDetails";
import ContactUsForm from "./ContactUsForm";
import GoogleApiWrapper from "./MapContainer";

class ContactUsPage extends Component {
  render() {
    return (
      <div className="content">
  
        <ContactUsForm />
        <ContactDetails />
      
        <GoogleApiWrapper />
      </div>
    );
  }
}

export default ContactUsPage;
