import React from "react";
import { withRouter } from "react-router";
import axios from "axios";
import { clientAuth } from "../../helpers/auth";

import { BACKEND_URI } from "../../helpers/env";

import "./style.scss";
import Swal from "sweetalert";

// const HEROKU_API = process.env.REACT_APP_BACKEND_URI;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null,
      status: null,
      isLoading: false
    };
  }

  handleLogin = (from, history) => {
    this.setState({
      isLoading: true
    });

    axios
      .post(BACKEND_URI + "/users/authenticated", this.state)
      .then(result => {
        console.log(result);
        this.props.value.addUser(result.data.result);
        clientAuth.authenticate(() => {
          this.setState({
            status: "Login Sucess",
            isLoading: false
          });
        });
        Swal("Happy Shopping!", "Login Success", "success");
        history.replace(from);
      })
      .catch(error => {
        this.setState({
          error: error.message,
          isLoading: false
        });
      });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { location, history } = this.props;
    const { name, password, isLoading, error } = this.state;
    let { from } = location.state || { from: { pathname: "/" } };
    console.log(this.props);

    return (
      <div className="base-container" ref={this.props.containerRef}>
        {isLoading && <div>Loading.....</div>}
        {error && <div>{error}</div>}
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src="" alt="" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="email"
                value={name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button
            type="button"
            className="btn"
            onClick={() => this.handleLogin(from, history)}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
