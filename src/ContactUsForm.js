import React, { Component } from "react";

class ContactUsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ ...this.state, [event.target.id]: value });
  };

  handleSubmit = (event) => {
    alert(
      "Info submitted was: " +
        "\n" +
        this.state.name +
        "\n" +
        this.state.email +
        "\n" +
        this.state.message
    );
    event.preventDefault();
  };

  isValid = () => {
    return this.state.name === "" ||
      this.state.email === "" ||
      this.state.message === ""
      ? false
      : true;
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
          <button disabled={!this.isValid()} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ContactUsForm;
