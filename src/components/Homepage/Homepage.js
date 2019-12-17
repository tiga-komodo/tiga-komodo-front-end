import React, { Component } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import newrelease from "../../assets/images/newrelease.jpg";
import issue from "../../assets/images/issue.jpeg";
import trend from "../../assets/images/trend.jpg";
import lifestyle from "../../assets/images/lifestyle.jpg";
import Testimonial from "../Testimonial/Testimonial";

export default class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="container">
          <div className="row">
            <div className="col-sm-6">
              <p>New Release</p>
              <Link to="/newrelease">
                <img src={newrelease} alt="" />
              </Link>
            </div>
            <div className="col-sm-6">
              <p>Issue</p>
              <Link to="/issue">
                <img src={issue} alt="" />
              </Link>
            </div>
            <div className="col-sm-6">
              <p>Trend</p>
              <Link to="/trend">
                <img src={trend} alt="" />
              </Link>
            </div>
            <div className="col-sm-6">
              <p>Lifestyle</p>
              <Link to="/lifestyle">
                <img src={lifestyle} alt="" />
              </Link>
            </div>
          </div>
          <div className="row text-center"></div>
        </section>
        <Testimonial />
      </React.Fragment>
    );
  }
}

// const DivWrapper = styled.div`
//   section .row img {
//     margin: 0 0 30px;
//     width: 100%;
//   }

//   .col-md-6 {
//     margin: 0 0 30px;
//   }

//   h2 {
//     text-align: center;
//   }
// `;