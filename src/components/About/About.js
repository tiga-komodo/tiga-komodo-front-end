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
import Mongodb from "../../assets/images/mongodb.svg";
import Mongoose from "../../assets/images/mongoose_logo.svg";
import Nodejs from "../../assets/images/nodejs.svg";
import Reactjs from "../../assets/images/react.svg"
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
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://github.com/Zakintaliban`}
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://twitter.com/Zakintaliban`}
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.instagram.com/hasbi_zakin/`}
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="pe">
                <img src={Iman} alt="" />
                <div className="p-name">Iman</div>
                <div className="p-des">Full Stack Developer</div>
                <div className="p-sm">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://github.com/imanardiansyahh`}
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://twitter.com/imanardiansyahh`}
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.instagram.com/imanardiansyahh`}
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="pe">
                <img src={Iqbal} alt="" />
                <div className="p-name">Iqbal</div>
                <div className="p-des">Full Stack Developer</div>
                <div className="p-sm">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://github.com/iqbalelyas`}
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://twitter.com`}
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.instagram.com`}
                  >
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
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://expressjs.com/"
                  >
                    <img src={Express} alt="" width="100" height="150" />
                  </a>
                </div>
                <div class="col-sm">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.mongodb.com"
                  >
                    {" "}
                    <img src={Mongodb} alt="" width="100" height="150" />
                  </a>
                </div>
                <div class="col-sm">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mongoosejs.com/"
                  >
                    <img src={Mongoose} alt="" width="100" height="150" />
                  </a>
                </div>
                <div class="col-sm">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://nodejs.org/en/"
                  >
                    <img src={Nodejs} alt="" width="100" height="40" />
                  </a>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-sm">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://getbootstrap.com/"
                  >
                    <img src={Bootstrap} alt="" width="100" height="100" />
                  </a>
                </div>
                <div className="col-sm">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.w3.org/MarkUp/"
                  >
                    <img src={Html} alt="" width="100" height="100" />
                  </a>
                </div>
                <div className="col-sm">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.w3.org/Style/CSS/Overview.en.html"
                  >
                    <img src={Css} alt="" width="100" height="100" />
                  </a>
                </div>
                <div className="col-sm">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.javascript.com/"
                  >
                    <img src={Javascript} alt="" width="100" height="100" />
                  </a>
                </div>
                <div className="col-sm">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://reactjs.org/"
                  >
                    <img src={Reactjs} alt="" width="100" height="100" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
