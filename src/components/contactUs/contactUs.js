import React, { Component } from "react";
import axios from "axios";

import "./style.scss";
import { BACKEND_URI } from "../../helpers/env";

export default class contactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      message: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  sendMessage = event => {
    event.preventDefault();
    axios
      .post(BACKEND_URI + "/users/contact-us", this.state)
      .then(result => {
        console.log(result);
      })
      .then(() => {
        this.setState({ name: "", email: "", phoneNumber: "", message: "" });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="container">
        <div>
          <div className="contact-section">
            <h1>Contact Us</h1>
            <div className="border"></div>
            <form className="contact-form" onSubmit={this.sendMessage}>
              <input
                type="text"
                className="contact-form-text"
                placeholder="Your name"
                onChange={this.handleChange}
                name="name"
                value={this.state.name}
              />
              <input
                type="email"
                className="contact-form-text"
                placeholder="Your email"
                onChange={this.handleChange}
                name="email"
                value={this.state.email}
              />
              <input
                type="text"
                className="contact-form-text"
                placeholder="Your phone"
                onChange={this.handleChange}
                name="phoneNumber"
                value={this.state.phoneNumber}
              />
              <textarea
                className="contact-form-text"
                placeholder="Your message"
                onChange={this.handleChange}
                name="message"
                value={this.state.message}
              ></textarea>
              <input type="submit" className="contact-form-btn" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
