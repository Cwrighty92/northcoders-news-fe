import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
const TopNavBar = props => {
  return (
    <nav className="nav-bar-header">
      {props.loggedIn && (
        <nav>
          <NavLink to={"/articles"} className="nav-item">
            Articles
          </NavLink>
          <NavLink to={"/users"} className="nav-item">
            Members
          </NavLink>
          <NavLink
            to={"/"}
            onClick={() => {
              props.handleLogIn("out");
            }}
            className="nav-item"
          >
            Log Out
          </NavLink>
        </nav>
      )}
      {!props.loggedIn && (
        <NavLink to={"/"} className="nav-item">
          Log In
        </NavLink>
      )}
    </nav>
  );
};

export default TopNavBar;
