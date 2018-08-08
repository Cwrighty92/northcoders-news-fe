import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
const TopNavBar = props => {
  return (
    <nav className="nav-bar-header">
      {props.currentUser && (
        <nav>
          <NavLink to={"/articles"} className="nav-item-top">
            Articles
          </NavLink>
          <NavLink to={"/users"} className="nav-item-top">
            Members
          </NavLink>
          <NavLink
            to={"/"}
            onClick={() => {
              props.handleLogIn("out");
            }}
            className="nav-item-top"
          >
            Log Out
          </NavLink>
        </nav>
      )}
      {!props.currentUser && (
        <nav>
          <NavLink to={"/articles"} className="nav-item-top">
            Articles
          </NavLink>
          <NavLink to={"/users"} className="nav-item-top">
            Members
          </NavLink>
          <NavLink to={"/"} className="nav-item-top">
            Log In
          </NavLink>
        </nav>
      )}
    </nav>
  );
};

export default TopNavBar;
