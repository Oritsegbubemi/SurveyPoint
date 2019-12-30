import React, { Component } from "react";
import Logo from "./Logo.png";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import "./Signup.css";
import Button from "../../components/button/Button";
import Copyright from "../../components/copyright/Copyright";


class Signup extends Component {
  render() {
    return (
      <div className="col-md-4 offset-md-4 signup-container main-page">
        <div className="text-center">
          <img src={Logo} alt="logo" className="signup-logo" />
          <h1>Create Account</h1>
          <p>Signup for free unlimited survey</p>
          <p>already a Member? Login Now</p>
        </div>

        <form>
          <div className="form-group">
            <Label forLabel="fullName">Full Name</Label>
            <Input
              name="fullName"
              type="text"
              customClassName="form-control input-shadow"
              id="fullName"
              aria-describedby="fullName"
            />
          </div>
          <div className="form-group">
            <Label forLabel="exampleInputEmail1">Email</Label>
            <Input
              name="email"
              type="email"
              customClassName="form-control input-shadow"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <Label forLabel="exampleInputPassword1">Password</Label>
            <Input
              name="password"
              type="password"
              customClassName="form-control input-shadow"
              id="exampleInputPassword1"
              p
            />
          </div>
          <div className="form-group">
            <Label forLabel="exampleInputPassword2">Confirm Password</Label>
            <Input
              name="confirmPassword"
              type="password"
              customClassName="form-control input-shadow"
              id="exampleInputPassword2"
              p
            />
          </div>
          <div className="signup-button-container">
            <Button customClassName="regular-button">Signup</Button>
          </div>
        </form>
        <Copyright />
      </div>
    );
  }
}

export default Signup;
