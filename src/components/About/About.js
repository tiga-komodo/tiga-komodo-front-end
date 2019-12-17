import React, { Component } from "react";
import "./style.scss";
import Hasbi from "../../assets/images/hasbi.JPG";
import Iman from "../../assets/images/iman.JPG";
import Iqbal from "../../assets/images/iqbal.jpg";

export default class About extends Component {
  render() {
    return (
      <div className="team-section">
        <div className="inner-width">
          <h1>Meet Our Team</h1>
          <div className="pers">
            <div className="pe">
              <img src={Hasbi} alt="" />
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
              <img src={Iman} alt="" />
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
              <img src={Iqbal} alt="" />
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
