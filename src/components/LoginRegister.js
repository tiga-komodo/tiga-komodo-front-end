import React from "react";
import styled from "styled-components";

function LoginRegister() {
  return (
    <NavWrapper>
      <div className="form">
        <ul className="tab-group">
          <li className="tab active">
            <a href="#signup">Sign Up</a>
          </li>
          <li className="tab">
            <a href="#login">Log In</a>
          </li>
        </ul>

        <div className="tab-content">
          <div id="signup">
            <h1>Sign Up for Free</h1>

            <form action="/" method="post">
              <div className="top-row">
                <div className="field-wrap">
                  <label>
                    First Name<span className="req">*</span>
                  </label>
                  <input type="text" required autocomplete="off" />
                </div>

                <div className="field-wrap">
                  <label>
                    Last Name<span className="req">*</span>
                  </label>
                  <input type="text" required autocomplete="off" />
                </div>
              </div>

              <div className="field-wrap">
                <label>
                  Email Address<span className="req">*</span>
                </label>
                <input type="email" required autocomplete="off" />
              </div>

              <div className="field-wrap">
                <label>
                  Set A Password<span className="req">*</span>
                </label>
                <input type="password" required autocomplete="off" />
              </div>

              <button type="submit" className="button button-block">
                Get Started
              </button>
            </form>
          </div>

          <div id="login">
            <h1>Welcome Back!</h1>

            <form action="/" method="post">
              <div className="field-wrap">
                <label>
                  Email Address<span className="req">*</span>
                </label>
                <input type="email" required autocomplete="off" />
              </div>

              <div className="field-wrap">
                <label>
                  Password<span className="req">*</span>
                </label>
                <input type="password" required autocomplete="off" />
              </div>

              <p className="forgot">{/* <a href="#">Forgot Password?</a> */}</p>

              <button className="button button-block">Log In</button>
            </form>
          </div>
        </div>
      </div>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  background: #c1bdba;
  font-family: "Titillium Web", sans-serif;

  a {
    text-decoration: none;
    color: #1ab188;
    transition: 0.5s ease;
    &:hover {
      color: #1ab188;
    }
  }

  .form {
    background: rgba(19, 35, 47, 0.9);
    padding: 40px;
    max-width: 600px;
    margin: 40px auto;
    border-radius: 4px;
    box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3);
  }

  .tab-group {
    list-style: none;
    padding: 0;
    margin: 0 0 40px 0;
    &:after {
      content: "";
      display: table;
      clear: both;
    }
    li a {
      display: block;
      text-decoration: none;
      padding: 15px;
      background: rgba(160, 179, 176, 0.25);
      color: #a0b3b0;
      font-size: 20px;
      float: left;
      width: 50%;
      text-align: center;
      cursor: pointer;
      transition: 0.5s ease;
      &:hover {
        background: #1ab188;
        color: #ffffff;
      }
    }
    .active a {
      background: #1ab188;
      color: #ffffff;
    }
  }

  .tab-content > div:last-child {
    display: none;
  }

  h1 {
    text-align: center;
    color: #ffffff;
    font-weight: 300;
    margin: 0 0 40px;
  }

  label {
    position: absolute;
    transform: translateY(6px);
    left: 13px;
    color: rgba(0, 0, 0, 0.5);
    transition: all 0.25s ease;
    -webkit-backface-visibility: hidden;
    pointer-events: none;
    font-size: 22px;
    .req {
      margin: 2px;
      color: #1ab188;
    }
  }

  label.active {
    transform: translateY(50px);
    left: 2px;
    font-size: 14px;
    .req {
      opacity: 0;
    }
  }

  label.highlight {
    color: #ffffff;
  }

  input,
  textarea {
    font-size: 22px;
    display: block;
    width: 100%;
    height: 100%;
    padding: 5px 10px;
    background: none;
    background-image: none;
    border: 1px solid #a0b3b0;
    color: #ffffff;
    border-radius: 0;
    transition: border-color 0.25s ease, box-shadow 0.25s ease;
    &:focus {
      outline: 0;
      border-color: #1ab188;
    }
  }

  textarea {
    border: 2px solid #a0b3b0;
    resize: vertical;
  }

  .field-wrap {
    position: relative;
    margin-bottom: 40px;
  }

  .top-row {
    &:after {
      content: "";
      display: table;
      clear: both;
    }

    > div {
      float: left;
      width: 48%;
      margin-right: 4%;
      &:last-child {
        margin: 0;
      }
    }
  }

  .button {
    border: 0;
    outline: none;
    border-radius: 0;
    padding: 15px 0;
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    background: #1ab188;
    color: #ffffff;
    transition: all.5s ease;
    -webkit-appearance: none;
    &:hover,
    &:focus {
      background: #1ab188;
    }
  }

  .button-block {
    display: block;
    width: 100%;
  }

  .forgot {
    margin-top: -20px;
    text-align: right;
  }
`;

export default LoginRegister;
