import React from "react";
import axios from "axios";
import Swal from "sweetalert";
import { withRouter } from "react-router-dom";
import "./style.scss";
import { BACKEND_URI } from "../../helpers/env";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  handleRegister = event => {
    event.preventDefault();
    const { password, email, ...otherState } = this.state;
    console.log(otherState);

    axios
      .post(BACKEND_URI + "/users", otherState)
      .then(result => {
        console.log(result);
        if (result.status === 200) {
          this.props.history.push("/login&register");
          Swal("Welcome!", "Register Success", "success");
        }
        this.setState({
          name: "",
          email: "",
          password: ""
        });
      })
      .catch(error => {
        console.log(error);
        Swal("Oops", "Username or email not valid", "error");
      });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { name, email, password } = this.state;
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
              <input
                type="text"
                name="username"
                placeholder="username"
                value={name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="email"
                value={email}
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
          <button type="button" className="btn" onClick={this.handleRegister}>
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
