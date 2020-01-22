import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS
} from "../../actionTypes/index";

const initialState = {
  loading: false,
  user: null,
  error: ""
};

const loginStart = state => {
  return {
    ...state,
    loading: true
  };
};

const loginSuccess = (state, action) => {
  return {
    ...state,
    user: action.authData,
    loading: false
  };
};

const loginFail = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.authError
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return loginStart(state);

    case LOGIN_SUCCESS:
      return loginSuccess(state, action);

    case LOGIN_FAIL:
      return loginFail(state, action);

    default:
      return state;
  }
};
