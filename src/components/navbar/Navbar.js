import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import Button from "../button/Button";
import Sidebar from "../sidebar/Sidebar";
import {Context} from "../../store/context"

const Navbar = () => {
  const {sidebar, toggleSidebar} = useContext(Context);  
  return (
    <React.Fragment>
    <nav className="navbar">
         <div className="navbar-left-side">
          <div className="bars-container" onClick={toggleSidebar}>
            <FontAwesomeIcon icon="bars" />
          </div>
          <div className="logo-container">
            <h3>Survey Point</h3>
          </div>
        </div>

        <div className="navbar-right">
          <Button customClassName="inverse-button btn-nav mr-5">Login</Button>{" "}
          <Button customClassName="regular-button btn-nav">Signup</Button>
        </div>
    </nav>

    <Sidebar handleOpenSidebar={sidebar.openSidebar} />
    </React.Fragment>
  )
};

export default Navbar;
