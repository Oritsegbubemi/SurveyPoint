import { TOGGLE_SIDEBAR } from "../../actionTypes/index";

export const toggleSidebar = sidebar => {
  return {
    type: TOGGLE_SIDEBAR
  };
};

export const sidebarToggle = () => {
  return dispatch => {
    dispatch(toggleSidebar());
  };
};
