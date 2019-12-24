import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { fab, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faPhoneAlt, faEnvelope, faMapMarkerAlt,} from "@fortawesome/free-solid-svg-icons";

import Signup from "./views/signup/Signup";
import "./App.css";
import HomePage from "./views/homePage/HomePage";

library.add(fab, faArrowRight, faPhoneAlt, faEnvelope, faMapMarkerAlt, faTwitter);

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Signup />
        <HomePage />
      </div>
      </Router>
    );
  }
}

export default App;
