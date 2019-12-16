import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="container py-5">
        <div className="row">
          <div className="col-12 col-md">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="d-block mb-2"
              role="img"
              viewBox="0 0 24 24"
              focusable="false"
            >
              <title>Product</title>
              <circle cx="12" cy="12" r="10" />
              <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
            </svg> */}
            <small className="d-block mb-3 text-muted">&copy; 2017-2019</small>
          </div>
          <div className="col-6 col-md">
            <h5>Layanan Pelanggan</h5>
            <ul className="list-unstyled text-small">
              <li>Pusat Bantuan</li>
              <li>Cara Pembelian</li>
              <li>Pengiriman</li>
              <li>Cara Pengembalian</li>
              <li>Hubungi kami (24 jam)</li>
            </ul>
          </div>
          {/* <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li>Resource</li>
              <li>Resource name</li>
              <li>Another resource</li>
              <li>Final resource</li>
            </ul>
          </div> */}
          <div className="col-6 col-md">
            <h5>Tentang Kami</h5>
            <ul className="list-unstyled text-small">
              <li>Karir</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Follow Us</h5>
            <ul className="list-unstyled text-small">
              <li>
                <i class="fab fa-facebook"></i>
              </li>
              <li>
                <i class="fab fa-instagram"></i>
              </li>
              <li>
                <i class="fab fa-twitter"></i>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
