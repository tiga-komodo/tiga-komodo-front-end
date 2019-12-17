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
        <img src={logo} alt="store" className="navbar-brand" width="50" />
      </Link>
      <ul className="navbar-nav align-items-center">
        {clientAuth.isAuthenticated ? (
          <li
            className="nav-item active"
            onClick={() => {
              clientAuth.signout(() => history.push("/"));
            }}
          >
            Logout
          </li>
        ) : (
          <li className="nav-item active">
            <Link to="/login" className="nav-link">
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
      </ul>
      <Link to="/cart" className="ml-auto">
        <i class="fas fa-shopping-cart"></i>
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
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;

    }
  }
`;
