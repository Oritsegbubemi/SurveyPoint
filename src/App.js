import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { fab, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
  faBars,
  faUser,
  faTrashAlt,
  faSignOutAlt,
  faAddressCard,
  faListAlt,
  faPlusCircle,
  faPencilAlt,
  faSearch,
  faDotCircle,
  faCheckSquare,
  faArrowLeft,
  faArrowDown
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import HomePage from "./views/homePage/HomePage";
import Signup from "./views/signup/Signup";
import Login from "./views/login/Login";
import Navbar from "./components/navbar/Navbar";
import { Provider } from "react-redux";
import Dashboard from "./views/dashboard/Dashboard";
import CreateSurvey from "./views/createSurvey/CreateSurvey";
import Logout from "./views/logout/Logout";
import Fire from "../src/config/Fire";
import setupStore from "./store";

const store = setupStore();

library.add(
  fab,
  faArrowRight,
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
  faTwitter,
  faBars,
  faUser,
  faTrashAlt,
  faSignOutAlt,
  faAddressCard,
  faListAlt,
  faPlusCircle,
  faPencilAlt,
  faSearch,
  faDotCircle,
  faCheckSquare,
  faArrowLeft,
  faArrowDown
);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }
  
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/new-survey" component={CreateSurvey} />
              <Route path="/logout" component={Logout} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
