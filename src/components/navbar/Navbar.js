import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import Sidebar from "../sidebar/Sidebar";
import { connect } from "react-redux";
import Fire from '../../config/Fire';
import { sidebarToggle } from "./NavbarAction";
import { Link } from "react-router-dom";

const Navbar = props => {
  const { sidebarToggle, sidebarState } = props;

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-left-side">
          <div className="bars-container" onClick={sidebarToggle}>
            <FontAwesomeIcon icon="bars" />
          </div>
          <div className="logo-container">
            <Link to="/">
              <h3>Survey Point</h3>
            </Link>
          </div>
        </div>

        <div className="navbar-right">
          <h3>Create Awesome Survey</h3>
        </div>
      </nav>

      <Sidebar handleOpenSidebar={sidebarState} />
    </React.Fragment>
  );
};

export const mapStateToProps = state => ({
  sidebarState: state.sidebar.sidebar
});

export const mapDispatchToProps = dispatch => ({
  sidebarToggle: () => dispatch(sidebarToggle())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
