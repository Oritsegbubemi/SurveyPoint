import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/">
            <h3>Survey Point</h3>
          </Link>
        </div>
        <div className="navbar-right">{props.children}</div>
      </nav>
    </div>
  );
};

export default Header;
