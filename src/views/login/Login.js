import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fire from "../../config/Fire";
import Header from "../../components/header/Header";
import Logo from "./Logo.png";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import "./Login.css";
import Button from "../../components/button/Button";
import Copyright from "../../components/copyright/Copyright";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }
  emailChange(event) {
    this.setState({ email: event.target.value });
  }
  passwordChange(event) {
    this.setState({ password: event.target.value });
  }

  onButtonPress() {
    const { email, password } = this.state;
    Fire.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Successfully Logged In');
        this.props.history.push('/dashboard')
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }


  render() {
    return (
      <div>
        <Header>
          <div>
          <Link to="/signup" className="btn regular-button btn-nav">
            Signup
          </Link>
          </div>
        </Header>
      <div className="col-md-4 offset-md-4 login-container">
        <div className="text-center">
          <img src={Logo} alt="logo" className="login-logo" />
          <h3>Login to Survey Point</h3>
          <p>
            New to Survey Point? <Link to="/signup"> Signup</Link>
          </p>
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
              value={this.state.password}
              handleChange={this.passwordChange.bind(this)}
            />
          </div>
          <div className="login-button-container">
            <Button
              customClassName="regular-button"
              onclick={this.onButtonPress.bind(this)}
            >
              Login
            </Button>
          </div>
        </form>
        <Copyright />
      </div>
      </div>
    );
  }
}

export default Login;
