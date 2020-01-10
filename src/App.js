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

import Signup from "./views/signup/Signup";
import "./App.css";
import HomePage from "./views/homePage/HomePage";
import Navbar from "./components/navbar/Navbar";
import { Provider } from "./store/context";
import SingleSelectionProvider from "./store/selectionFields";
import Dashboard from "./views/dashboard/Dashboard";
import CreateSurvey from "./views/createSurvey/CreateSurvey";

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
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/signup" component={Signup} />
              <Route path="/dashboard" component={Dashboard} />
              <SingleSelectionProvider>
                <Route path="/new-survey" component={CreateSurvey} />
              </SingleSelectionProvider>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
