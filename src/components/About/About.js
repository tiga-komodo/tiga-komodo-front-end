import React, { Component } from "react";
import "./style.scss";
import Avatar from "../../assets/images/avatar.png";

export default class About extends Component {
  render() {
    return (
      <div className="team-section">
        <div className="inner-width">
          <h1>Meet Our Team</h1>
          <div className="pers">
            <div className="pe">
              <img src={Avatar} alt="" />
              <div className="p-name">Hasbi</div>
              <div className="p-des">Full Stack Developer</div>
              <div className="p-sm">
                <a href={`/`}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href={`/`}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={`/`}>
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="pe">
              <img src={Avatar} alt="" />
              <div className="p-name">Iman</div>
              <div className="p-des">Full Stack Developer</div>
              <div className="p-sm">
                <a href={`/`}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href={`/`}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={`/`}>
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="pe">
              <img src={Avatar} alt="" />
              <div className="p-name">Iqbal</div>
              <div className="p-des">Full Stack Developer</div>
              <div className="p-sm">
                <a href={`/`}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href={`/`}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={`/`}>
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
