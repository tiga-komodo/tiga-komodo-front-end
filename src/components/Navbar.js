import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/images/logo.png";
import { clientAuth } from "../helpers/auth";

export default function Navbar() {
  let history = useHistory();

  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      {/* /https://www.iconfinder.com/icons/1243689/call_phone_icon Creative
        Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */}
      <Link to="/">
        <img src={logo} alt="store" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav align-items-center">
        {clientAuth.isAuthenticated ? (
          <Link to="/" style={{ textDecoration: "none" }}>
            <li
              className="nav-item active"
              onClick={() => {
                clientAuth.signout(() => history.push("/"));
              }}
              style={{ color: "#fff" }}
            >
              Logout
            </li>
          </Link>
        ) : (
          <li className="nav-item active">
            <Link to="/login&register" className="nav-link">
              Login
            </Link>
          </li>
        )}
        <li className="nav-item active">
          <Link to="/productlist" className="nav-link">
            Product
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/ContactUs" className="nav-link">
            Contact Us
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <i className="fas fa-shopping-cart"></i>
      </Link>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  background: var(--mainBlack);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1rem;
    text-transform: capitalize !important;
  }

  .navbar-brand {
    width: 75px;
    padding: 0;
  }

  .nav-link:hover {
    color: #ffa801 !important;
  }

  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
    }
  }
`;
