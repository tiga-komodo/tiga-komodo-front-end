import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/* /https://www.iconfinder.com/icons/1243689/call_phone_icon Creative
        Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */}
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          {/* <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li> */}
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Register
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <i class="fas fa-shopping-cart"></i>
        </Link>
      </NavWrapper>
    );
  }
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
