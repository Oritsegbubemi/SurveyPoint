import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS
} from "../../actionTypes/index";
import Fire from "../../config/Fire";

export const loginStart = () => {
  return {
    type: LOGIN_START
  };
};

export const loginSuccess = authData => {
  return {
    type: LOGIN_SUCCESS,
    authData
  };
};

export const loginFailed = authError => {
  return {
    type: LOGIN_FAIL,
    authError
  };
};

export const logInRequest = (email, password, history) => {
  return dispatch => {
    dispatch(loginStart());

    return Fire.auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        const {
          displayName,
          refreshToken,
          email,
          uid,
          idToken
        } = response.user;
        const userData = {
          email,
          displayName,
          refreshToken,
          uid,
          idToken
        };

        localStorage.setItem("authUser", JSON.stringify(userData));
        dispatch(loginSuccess(userData));
        history.push("/dashboard");
      })
      .catch(err => {
        const error = err.toString();
        dispatch(loginFailed(error));
      });
  };
};

export const signupUser = (email, password, history) => {
  return dispatch => {
    dispatch(loginStart());
    return Fire.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        Fire.auth()
          .currentUser.sendEmailVerification()
          .then(alert("Kindly Verify your Email Address"));
        const {
          displayName,
          refreshToken,
          email,
          uid,
          idToken
        } = response.user;
        const userData = {
          email,
          displayName,
          refreshToken,
          uid,
          idToken
        };

        localStorage.setItem("authUser", JSON.stringify(userData));
        dispatch(loginSuccess(userData));
        history.push("/dashboard");
      })
      .catch(err => {
        const error = err.toString();
        dispatch(loginFailed(error));
      });
  };
};
