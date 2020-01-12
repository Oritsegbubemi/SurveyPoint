import React, { Component } from "react";
import Logo from "./Logo.png";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import "./Login.css";
import Button from "../../components/button/Button";
import Copyright from "../../components/copyright/Copyright";

class Login extends Component {
  render() {
    return (
      <div className="col-md-4 offset-md-4 login-container">
        <div className="text-center">
          <img src={Logo} alt="logo" className="login-logo" />
          <h3>Login to Survey Point</h3>
          <p>New to Survey Point? Signup Now</p>
          <hr />
        </div>

        <form>
          <div className="form-group">
            <Label forLabel="exampleInputEmail">Email</Label>
            <Input
              name="email"
              type="email"
              customClassName="form-control input-shadow"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="forgot-password">
            <small>Forgot Password?</small>
          </div>
          <div className="form-group">
            <Label forLabel="exampleInputPassword">Password</Label>
            <Input
              name="password"
              type="password"
              customClassName="form-control input-shadow"
              id="exampleInputPassword"
              p
            />
          </div>
          <div className="login-button-container">
            <Button customClassName="regular-button">Login</Button>
          </div>
        </form>
        <Copyright />
      </div>
    );
  }
}

export default Login;
