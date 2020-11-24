import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import NavBar from "./NavBar";
import Header from "./Header";
import HomePage from "./HomePage";
import ContactUsPage from "./ContactUsPage";
import SoftwareArtPage from "./SoftwareArtPage";
import ContractingAndFreelancingPage from "./ContractingAndFreelancingPage";

const App = () => {
  return (
    <React.StrictMode>
      <Header />
      <NavBar />
      <Router>
      <HomePage path="/" />
      <SoftwareArtPage path="/software-art" />
      <ContractingAndFreelancingPage path="/contracting-and-freelancing" />
      <ContactUsPage path="/contact-us" />
      </Router>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
