import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fire from "../../config/Fire";
import Header from "../../components/header/Header";
import Logo from "./Logo.png";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import "./ForgotPassword.css";
import Button from "../../components/button/Button";
import Copyright from "../../components/copyright/Copyright";


class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }
  emailChange(event) {
    this.setState({ email: event.target.value });
  }

  onButtonPress() {
    const { email } = this.state;
    Fire.auth().sendPasswordResetEmail(email)
    .then(alert('Check your email to reset your password'))
    .then(this.props.history.push('/login'))
  }

  render() {
    return (
      <div>
        <Header>
          <div>
          <Link to="/login" className="btn inverse-button btn-nav mr-5">
            Login
          </Link>
          <Link to="/signup" className="btn regular-button btn-nav">
            Signup
          </Link>
          </div>
        </Header>
      <div className="col-md-4 offset-md-4 login-container">
        <div className="text-center">
          <img src={Logo} alt="logo" className="login-logo" />
          <h3>Welcome to Survey Point</h3>
          <p>Reset Your Password</p>
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
              value={this.state.email}
              handleChange={this.emailChange.bind(this)}
            />
          </div>
         
          <div className="login-button-container">
            <Button
              customClassName="regular-button"
              onclick={this.onButtonPress.bind(this)}
            >
              Reset
            </Button>
          </div>
        </form>
        <Copyright />
      </div>
      </div>
    );
  }
}

export default ForgotPassword;
