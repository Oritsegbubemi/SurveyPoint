import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.css";
import Fire from '../../config/Fire';
import Logo from "./surveypointlogo.jpeg";

const Sidebar = props => {
  const { handleOpenSidebar } = props;

  const hideSidebar = handleOpenSidebar ? "showSidebar" : "hideSidebar";
  const customClass = `sidebar ${hideSidebar}`;
  //{Fire.auth().currentUser.email}
  return (
    <div className={customClass}>
      <div className="sidebar-user-profile">
        {" "}
        <FontAwesomeIcon icon="user" />
        
        <h6>gbubemimakpokpomi@gmmail.com</h6>
      </div>

      <div className="sidebar-links">
        <Link to="/dashboard">
          <FontAwesomeIcon icon="list-alt" /> My Surveys
        </Link>
        <Link to="#">
          <FontAwesomeIcon icon="address-card" /> Contact
        </Link>
        <Link to="/logout">
          <FontAwesomeIcon icon="sign-out-alt" /> Logout
        </Link>
      </div>

      <div className="sidebar-logo-container">
        <img alt="logo" src={Logo} />
      </div>
    </div>
  );
};

export default Sidebar;
