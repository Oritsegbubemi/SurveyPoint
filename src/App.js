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
import { Provider } from "react-redux";
import "./App.css";
import HomePage from "./views/homePage/HomePage";
import Signup from "./views/signup/Signup";
import ForgotPassword from "./views/forgotPassword/ForgotPassword";
import Login from "./views/login/Login";
import Dashboard from "./views/dashboard/Dashboard";
import CreateSurvey from "./views/createSurvey/CreateSurvey";
import Logout from "./views/logout/Logout";
import Fire from "../src/config/Fire";
import { store, persistor } from "./store/index";
import { PersistGate } from "redux-persist/integration/react";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

// const store = setupStore();

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
      user: null
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    Fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <div className="App">
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/reset-password" component={ForgotPassword} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/new-survey" component={CreateSurvey} />
                <Route path="/logout" component={Logout} />
              </Switch>
            </div>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
