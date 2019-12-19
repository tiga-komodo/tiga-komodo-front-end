import React, { Component } from "react";
// import { BACKEND_URI } from "../helpers/env";
// import axios from "axios";

class PaymentModal extends Component {
  state = {
    paymentModalOpen: false
  };

  openPaymentModal = () => {
    this.setState(() => {
      return { paymentModalOpen: true };
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

export default PaymentModal;
