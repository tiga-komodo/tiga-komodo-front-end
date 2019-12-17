import React, { Component } from "react";
import "./style.scss";
import Customer1 from "../../assets/images/customer-1.jpg";
import Customer2 from "../../assets/images/customer-2.jpg";
import Customer3 from "../../assets/images/customer-3.jpg";

export default class Testimonial extends Component {
  render() {
    return (
      <div>
        <div className="testimonials">
          <div className="inner">
            <h1>Testimonials</h1>
            <div className="border"></div>

            <div className="row">
              <div className="col">
                <div className="testimonial">
                  <img src={Customer1} alt="" />
                  <div className="name">Customer 1</div>
                  <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore ipsam sit corporis libero optio doloribus
                    accusantium autem assumenda deserunt incidunt placeat veniam
                    ea in, rem sunt aperiam at quas enim.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="testimonial">
                  <img src={Customer2} alt="" />
                  <div className="name">Customer 2</div>
                  <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore ipsam sit corporis libero optio doloribus
                    accusantium autem assumenda deserunt incidunt placeat veniam
                    ea in, rem sunt aperiam at quas enim.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="testimonial">
                  <img src={Customer3} alt="" />
                  <div className="name">Customer 3</div>
                  <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore ipsam sit corporis libero optio doloribus
                    accusantium autem assumenda deserunt incidunt placeat veniam
                    ea in, rem sunt aperiam at quas enim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
