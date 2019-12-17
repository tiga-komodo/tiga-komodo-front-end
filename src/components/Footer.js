import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer className="container py-5">
        <div className="row">
          <div className="col-12 col-md">
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
              <Link
                to="/about"
                style={{ color: "#000000", textDecoration: "none" }}
              >
                <li>Our Team</li>
              </Link>
              <li>Karir</li>
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
