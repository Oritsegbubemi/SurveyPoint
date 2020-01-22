import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const auth = JSON.parse(localStorage.getItem("authUser")) || user;
  return (
    <Route
      {...rest}
      render={props =>
        auth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export const mapStateToProps = state => ({
  user: state.user.userData
});

export default connect(mapStateToProps)(PrivateRoute);
