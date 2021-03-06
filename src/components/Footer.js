import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer className="container py-5">
        <div className="row">
          <div className="col-12 col-md">
            <small className="d-block mb-3 text-muted">&copy; 2017-2019</small>
          </div>
          <div className="col-6 col-md">
            <h5>Customer Services</h5>
            <ul className="list-unstyled text-small">
              <li>Help</li>
              <li>How To Buy</li>
              <li>Shipment</li>
              <li>Return</li>
              <li>Call Center</li>
            </ul>
          </div>

          <div className="col-6 col-md">
            <h5>About Us</h5>
            <ul className="list-unstyled text-small">
              <Link
                to="/about"
                style={{ color: "#000000", textDecoration: "none" }}
              >
                <li>Our Team</li>
              </Link>
              <li>Career</li>
            </ul>
          </div>

          <div className="col-6 col-md">
            <h5>Follow Us</h5>
            <ul className="list-unstyled text-small">
              <li>
                {" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://facebook.com"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://instagram.com"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
