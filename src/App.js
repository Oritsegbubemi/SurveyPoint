import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Signup from "./views/signup/Signup";
import "./App.css";
import HomePage from "./views/homePage/HomePage";

library.add(fab, faCheckSquare, faCoffee, faArrowRight);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Signup />
        <HomePage />
      </div>
    );
  }
}

export default App;
