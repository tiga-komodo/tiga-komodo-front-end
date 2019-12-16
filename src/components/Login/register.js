import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

class Register extends React.Component {
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src="" alt="" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="username" />
            </div>
          </div>
        </div>
        <div className="footer">
          <Link to="/productlist">
            <button type="button" className="btn">
              Register
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Register;
