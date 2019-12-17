import React, { Component } from "react";
import "./style.scss";
import Hasbi from "../../assets/images/hasbi.JPG";
import Iman from "../../assets/images/iman.JPG";
import Iqbal from "../../assets/images/iqbal.jpg";
import Bootstrap from "../../assets/images/bootstrap-4.svg";
import Css from "../../assets/images/css.svg";
import Express from "../../assets/images/express-109.svg";
import Html from "../../assets/images/html-5.svg";
import Javascript from "../../assets/images/javascript.svg";
import NMM from "../../assets/images/node-mongoose-mongodb.png";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="team-section">
          <div className="inner-width">
            <h1>Meet Our Team</h1>
            <div className="pers">
              <div className="pe">
                <img src={Hasbi} alt="" />
                <div className="p-name">Hasbi</div>
                <div className="p-des">Full Stack Developer</div>
                <div className="p-sm">
                  <a href={`https://www.facebook.com/khasbullah.zakin`}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href={`https://twitter.com/Zakintaliban`}>
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href={`https://www.instagram.com/hasbi_zakin/`}>
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

        <div className="team-section">
          <div className="inner-width">
            <h1>Technology we use</h1>

            <div class="container">
              <div class="row align-items-center">
                <div class="col-sm">
                  <img src={Express} alt="" width="100" height="150" />
                </div>
                <div class="col-sm">
                  <img src={NMM} alt="" width="700" height="100" />
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-sm">
                  <img src={Bootstrap} alt="" width="100" height="100" />
                </div>
                <div class="col-sm">
                  <img src={Html} alt="" width="100" height="100" />
                </div>
                <div class="col-sm">
                  <img src={Css} alt="" width="100" height="100" />
                </div>
                <div class="col-sm">
                  <img src={Javascript} alt="" width="100" height="100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}