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
  faListAlt
} from "@fortawesome/free-solid-svg-icons";

import Signup from "./views/signup/Signup";
import "./App.css";
import HomePage from "./views/homePage/HomePage";
import Navbar from "./components/navbar/Navbar";

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
  faListAlt
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
