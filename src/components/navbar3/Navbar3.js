import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar3.css";
import { connect } from "react-redux";
import { sidebarToggle } from "./NavbarAction";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <div>
      <nav className="navbar">
          <div className="logo-container">
              <h3>Survey Point</h3>
          </div>

        <div className="navbar-right">
          <Link to="#" className="btn regular-button btn-nav">
            Share
          </Link>
        </div>
      </nav>

    </div>
  );
};

export const mapStateToProps = state => ({
  sidebarState: state.sidebar.sidebar
});

export const mapDispatchToProps = dispatch => ({
  sidebarToggle: () => dispatch(sidebarToggle())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
