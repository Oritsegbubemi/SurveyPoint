import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.css";
import Logo from "./surveypointlogo.jpeg";

const Sidebar = props => {
  const { handleOpenSidebar } = props;

  const hideSidebar = handleOpenSidebar ? "showSidebar" : "hideSidebar";

  const customClass = `sidebar ${hideSidebar}`;

  return (
    <div className={customClass}>
      <div className="sidebar-user-profile">
        {" "}
        <FontAwesomeIcon icon="user" />
        <small>Damilola Adekoya</small>
      </div>

      <div className="sidebar-links">
        <Link to="#">
          <FontAwesomeIcon icon="list-alt" /> My Surveys
        </Link>
        <Link to="#">
          <FontAwesomeIcon icon="trash-alt" /> Trash
        </Link>
        <Link to="#">
          <FontAwesomeIcon icon="address-card" /> Contact
        </Link>
        <Link to="#">
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
