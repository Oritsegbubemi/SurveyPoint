import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = props => {
    return (
        <div>
            <nav className="navbar">
                <div className="logo-container">
                    <h3>Survey Point</h3>
                </div>
                <div className="navbar-right">
                    {props.children}
                </div>
            </nav>
        </div>
    );
};

export default Header;
