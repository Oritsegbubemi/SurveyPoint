import { TOGGLE_SIDEBAR } from "../../actionTypes/index";

const initialState = {
  sidebar: false
};

const toggleSidebar = state => {
  return {
    ...state,
    sidebar: !state.sidebar
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return toggleSidebar(state);

    default:
      return state;
  }
};
