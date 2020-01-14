import React, { Component } from "react";
import firebase from "firebase";
import Logo from "./Logo.png";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import "./Signup.css";
import Button from "../../components/button/Button";
import Copyright from "../../components/copyright/Copyright";
import { Link } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { fullname: "", email: "", password: "", confirm: "" };
  }

  nameChange(event) {
    this.setState({ fullname: event.target.value });
  }
  emailChange(event) {
    this.setState({ email: event.target.value });
  }
  passwordChange(event) {
    this.setState({ password: event.target.value });
  }
  confirmChange(event) {
    this.setState({ confirm: event.target.value });
  }

  onButtonPress() {
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
  }
  //Just testing
  onLoginFail() {
    console.log("Error");
  }
  onLoginSuccess() {
    console.log("Success");
  }

  render() {
    return (
      <div className="col-md-4 offset-md-4 signup-container">
        <div className="text-center">
          <img src={Logo} alt="logo" className="signup-logo" />
          <h3>Create Account</h3>
          <p>Signup for free unlimited survey</p>
          <p>
            Already a Member? <Link>Login</Link>
          </p>
          <hr />
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
              value={this.state.fullname}
              handleChange={this.nameChange.bind(this)}
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
              value={this.state.email}
              handleChange={this.emailChange.bind(this)}
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
              value={this.state.password}
              handleChange={this.passwordChange.bind(this)}
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
              value={this.state.confirm}
              handleChange={this.confirmChange.bind(this)}
            />
          </div>
          <div className="signup-button-container">
            <Button
              customClassName="regular-button"
              onclick={this.onButtonPress.bind(this)}
            >
              Signup
            </Button>
          </div>
        </form>
        <Copyright />
      </div>
    );
  }
}

export default Signup;
