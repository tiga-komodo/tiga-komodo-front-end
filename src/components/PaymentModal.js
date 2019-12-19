import React, { Component } from "react";
import { BACKEND_URI } from "../helpers/env";
import axios from "axios";

export default class PaymentModal extends Component {
  state = {
    orders: {},
    paymentModalOpen: false,
    modalOrder: {}
  };

  setOrder = () => {
    axios
      .get(BACKEND_URI + "orders")
      .then(result => {
        this.setState({
          orders: result.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  getOrder = id => {
    const order = this.state.orders.find(item => item._id === id);
    return order;
  };

  openPaymentModal = id => {
    const order = this.getOrder(id);
    this.setState(() => {
      return { modalOrder: order, paymentModalOpen: true };
    });
  };

  closePaymentModal = () => {
    this.setState(() => {
      return { paymentModalOpen: false };
    });
  };

  render() {
    return (
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Payment Success
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
