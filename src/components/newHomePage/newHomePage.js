import React, { Component } from "react";
import "./style.scss";

export default class newHomePage extends Component {
  render() {
    return (
      <div>
        <h1 className="techno-header">A r t</h1>
        <ul>
          <li>
            <span>Multicolored Abstract Wallpaper</span>
            <img src="./images/rubah.jpeg" />
          </li>

          <li>
            <span>Floral Person's Portrait Graffiti</span>
            <img src="./images/the face.jpeg" />
          </li>

          <li>
            <span>Person Holding Click Pen</span>
            <img src="./images/person holding click pen.jpeg" />
          </li>

          <li>
            <span>Multicolored Female Painting</span>
            <img src="./images/multicolored female painting.jpeg" />
          </li>

          <li>
            <span>Animal Abstract</span>
            <img src="./images/Animal Abstract.jpeg" />
          </li>
        </ul>
      </div>
    );
  }
}
