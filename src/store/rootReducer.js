import { combineReducers } from "redux";
import NavbarReducer from "../components/navbar/NavbarReducer";

const rootReducer = combineReducers({
  sidebar: NavbarReducer
});

export default rootReducer;
