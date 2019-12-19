import React, { Component } from "react";
import { ProductConsumer } from "../context/product";
import { ButtonContainer } from "./Button";
import { Link, withRouter } from "react-router-dom";
import { clientAuth } from "../helpers/auth";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            _id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;

          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h1>model : {title}</h1>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price : <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product :
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <div>
                    <Link to="/productlist">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        if (clientAuth.isAuthenticated) {
                          value.addToCart(_id);
                          value.openModal(_id);
                        } else {
                          this.props.history.push("/login&register");
                        }
                      }}
                    >
                      {inCart ? "in cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default withRouter(Details);
