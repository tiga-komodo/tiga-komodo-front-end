import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

// import PayPalButton from "./PayPalButton";
import { Link, withRouter } from "react-router-dom";
import { BACKEND_URI } from "../../helpers/env";

class CartTotals extends Component {
  render() {
    const {
      cartSubTotal,
      cartTax,
      cartTotal,
      cart,
      clearCart,
      user,
      modalPayment
    } = this.props.value;
    const { history } = this.props;
    const emptyCart = cart.length === 0 ? true : false;

    const order = {
      userId: user._id,
      products: cart,
      total: cartTotal
    };

    const closeModalPayment = () => {
      this.setState(() => {
        return { modalPayment: false };
      });
      clearCart();
      history.push("/");
    };

    const handlePayment = () => {
      axios
        .post(BACKEND_URI + "/orders", order)
        .then(result => {
          console.log(result);
          this.props.value.openModalPayment();
        })
        .catch(error => {
          console.log(error);
        });
    };

    console.log(order);
    return (
      <React.Fragment>
        {!emptyCart && (
          <div className="container">
            <div className="row">
              <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                <Link to="/cart">
                  <button
                    className="btn btn-outline-danger text-uppercase mb-3 px-5"
                    type="button"
                    onClick={() => {
                      clearCart();
                    }}
                  >
                    clear cart
                  </button>
                </Link>
                <h5>
                  <span className="text-title"> subtotal :</span>{" "}
                  <strong>$ {cartSubTotal} </strong>
                </h5>
                <h5>
                  <span className="text-title"> tax :</span>{" "}
                  <strong>$ {cartTax} </strong>
                </h5>
                <h5>
                  <span className="text-title"> total :</span>{" "}
                  <strong>$ {cartTotal} </strong>
                </h5>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  onClick={handlePayment}
                >
                  Payment
                </button>

                {!modalPayment ? null : (
                  <ModalContainer onClick={closeModalPayment}>
                    <div className="container">
                      <div className="row">
                        <div
                          className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
                          id="modal"
                        >
                          <h5>Payment Success</h5>
                        </div>
                      </div>
                    </div>
                  </ModalContainer>
                )}
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(CartTotals);

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
  z-index: 1;
`;
