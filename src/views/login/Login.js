import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fire from "../../config/Fire";
import Header from "../../components/header/Header";
import Logo from "./Logo.png";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import "./Login.css";
import Spinner from "../../components/spinner/Spinner";
import Button from "../../components/button/Button";
import Copyright from "../../components/copyright/Copyright";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", error: "", laoading: false };
  }
  emailChange(event) {
    this.setState({ email: event.target.value });
  }
  passwordChange(event) {
    this.setState({ password: event.target.value });
  }

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({error: '', loading: true })
    Fire.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Successfully Logged In');
        this.props.history.push('/dashboard')

      })
      .catch((err) => {this.setState({error: err.toString(), password: "", loading: false})})
  }
  renderButton() {
    if (this.state.loading) {
      return <Spinner />
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
            <small><Link to="/reset-password">Forgot Password?</Link></small>
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
            <p>{this.state.error}</p>
          </div>
          <div className="login-button-container">
            {this.renderButton()}
          </div>
        </form>
        <Copyright />
      </div>
      </div>
    );
  }
}

export default Login;
