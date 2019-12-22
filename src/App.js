import React, { Component } from "react";
import Dashboard from "./components/Dashboard";
import Signup from "./views/signup/Signup";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Dashboard /> */}
        <Signup />
      </div>
    );
  }
}

export default App;
