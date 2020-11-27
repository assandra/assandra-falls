import React, { Component } from "react";
import { isEmail } from "validator/lib/isEmail";

class ContactUsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      errors: {},
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ ...this.state, [event.target.id]: value });
  };

  handleValidation() {
    let isFormValid = true;

    // TODO fix validation
    
    // let errors = {};

    // const isEmailValid = isEmail(this.state.email);
    // if (isEmailValid) {
    //   isFormValid = false;
    //   errors["email"] = "Email is not valid";
    // }

    // alert(isFormValid);

    // this.setState({ errors: errors });

    return isFormValid;
  }

  handleSubmit = (event) => {

    if (this.handleValidation()) {
      alert(
        "Form successfully submitted with the following details: " +
          "\n" +
          this.state.name +
          "\n" +
          this.state.email +
          "\n" +
          this.state.message
      );
    } else {
      alert(
        "Form unsuccessfully submitted with the following errors: " +
          "\n" +
          this.state.errors
      );
    }
    event.preventDefault();
  };

  isEmptyForm = () => {
    return this.state.name === "" ||
      this.state.email === "" ||
      this.state.message === ""
      ? true
      : false;
  };

  render() {
    return (
      <div className="form">
        <h1>Contact Us</h1>
        <p>
          Interested in anything you have seen here, we would love to hear from
          you.
          <br />
          Either via Facebook, LinkedIn or the contact form below.
        </p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            type="text"
            id="email"
            placeholder="E-mail"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <textarea
            type="text"
            id="message"
            placeholder="Enter your message"
            value={this.state.message}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <button disabled={this.isEmptyForm()} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ContactUsForm;
