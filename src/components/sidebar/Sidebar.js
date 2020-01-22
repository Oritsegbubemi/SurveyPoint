import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.css";
import Logo from "./surveypointlogo.jpeg";

const Sidebar = props => {
  const { handleOpenSidebar, user } = props;

  const hideSidebar = handleOpenSidebar ? "showSidebar" : "hideSidebar";
  const customClass = `sidebar ${hideSidebar}`;
  //
  return (
    <div className={customClass}>
      <div className="sidebar-user-profile">
        {" "}
        <div>
          <FontAwesomeIcon icon="user" />
        </div>
        <div className="sidebar-user-email">
          <h6>{user.email}</h6>
        </div>
      </div>

      <div className="sidebar-links">
        <Link to="/dashboard">
          <FontAwesomeIcon icon="list-alt" /> My Surveys
        </Link>
        <Link to="#">
          <FontAwesomeIcon icon="address-card" /> My Profile
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
