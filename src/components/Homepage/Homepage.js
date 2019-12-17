import React, { Component } from "react";
import "./style.scss";
// import { Link } from "react-router-dom";

import Testimonial from "../Testimonial/Testimonial";
import Slider from "../Slider/Slider";

export default class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <Slider />
        <Testimonial />
      </React.Fragment>
    );
  }
}
