import React, { Component } from "react";
import styled from "styled-components";

export default class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <DivWrapper>
          {/* <section className="jumbotron">
            <div className="container">
              <div className="row text-center">
                <h2>Komodo</h2>
              </div>
            </div>
          </section> */}
          {/* <section className="container">
            <div className="row">
              <div className="col-sm-6">
                <p>New Release</p>
                <img src={newrealease} alt="" />
              </div>
              <div className="col-sm-6">
                <p>Issue</p>
                <img src={issue} alt="" />
              </div>
              <div className="col-sm-6">
                <p>Trend</p>
                <img src={trend} alt="" />
              </div>
              <div className="col-sm-6">
                <p>Lifestyle</p>
                <img src={lifestyle} alt="" />
              </div>
            </div>
            <div className="row text-center"></div>
          </section> */}
        </DivWrapper>
      </React.Fragment>
    );
  }
}

const DivWrapper = styled.div`
  // .jumbotron {
  //   display: flex;
  //   align-items: center;
  //   background-image: url("https://www.cyberworx.in/images/services/website-startups.jpg");
  //   background-size: cover;
  //   color: #ffffff;
  //   height: 500px;
  //   text-shadow: 0.25px 0.25px 0.25px #000000;
  //   border-radius: 0;pP
  // }

  // .jumbotron h2 {
  //   font-size: 60px;
  //   font-weight: 700;
  //   margin: 0;
  //   color: #fff;
  // }

  // .jumbotron h3 {
  //   margin: 10px 0 20px;
  //   color: #fff;
  // }

  section .row img {
    margin: 0 0 30px;
    width: 100%;
  }

  .col-md-6 {
    margin: 0 0 30px;
  }

  h2 {
    text-align: center;
  }
`;
