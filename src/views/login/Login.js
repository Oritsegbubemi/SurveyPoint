import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Logo from "./Logo.png";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import "./Login.css";
import Spinner from "../../components/spinner/Spinner";
import Button from "../../components/button/Button";
import Copyright from "../../components/copyright/Copyright";
import { logInRequest } from "./LoginAction";
import { Redirect } from "react-router-dom";

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
    const { loginAPI } = this.props;

    loginAPI(email, password, this.props.history);
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <Button
        customClassName="regular-button"
        onclick={this.onButtonPress.bind(this)}
      >
        Login
      </Button>
    );
  }

  render() {
    const user = JSON.parse(localStorage.getItem("authUser"));
    return (
      <div>
        {user ? <Redirect to="/dashboard" /> : ""}
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
              <small>
                <Link to="/reset-password">Forgot Password?</Link>
              </small>
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
            <div className="signup-error">
              <p>{this.props.error ? this.props.error : ""}</p>
            </div>
            <div className="login-button-container">{this.renderButton()}</div>
          </form>
          <Copyright />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user.userData,
  loading: state.user.loading,
  error: state.user.error
});

export const mapDispatchToProps = dispatch => ({
  loginAPI: (email, password, history) =>
    dispatch(logInRequest(email, password, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
