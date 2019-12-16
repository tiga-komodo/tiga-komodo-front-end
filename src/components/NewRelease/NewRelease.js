import React, { Component } from "react";
import newrelease from "../../assets/images/newrelease.jpg";
import "./style.scss";

export default class NewRelease extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div>
            <h1>2020 Top 3 Smartphone</h1>
          </div>
        </div>
        <div className="row">
          <div>
            <img src={newrelease} alt="" className="image" />
          </div>
        </div>
        <div>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            tenetur provident cumque aspernatur accusamus praesentium iste
            fugiat voluptates unde perspiciatis! Iste harum vitae cumque
            architecto omnis dolorum ut ipsum non.
          </p>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            tenetur provident cumque aspernatur accusamus praesentium iste
            fugiat voluptates unde perspiciatis! Iste harum vitae cumque
            architecto omnis dolorum ut ipsum non.
          </p>

          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            tenetur provident cumque aspernatur accusamus praesentium iste
            fugiat voluptates unde perspiciatis! Iste harum vitae cumque
            architecto omnis dolorum ut ipsum non.
          </p>
        </div>
      </div>
    );
  }
}
