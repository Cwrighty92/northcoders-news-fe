import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
const TopNavBar = props => {
  const activeStyle = { color: "gold" };
  return (
    <nav className="nav-bar-header">
      <NavLink
        to={"/articles"}
        className="nav-item-top"
        activeStyle={activeStyle}
      >
        Todays Articles |
      </NavLink>
      <NavLink to={"/users"} className="nav-item-top" activeStyle={activeStyle}>
        Members |
      </NavLink>
      {props.currentUser && (
        <NavLink
          to={"/"}
          onClick={() => {
            props.handleLogIn("out");
          }}
          className="nav-item-top"
        >
          Log Out
        </NavLink>
      )}
      {!props.currentUser && (
        <NavLink to={"/"} className="nav-item-top" activeStyle={activeStyle}>
          Log In
        </NavLink>
      )}
    </nav>
  );
};

export default TopNavBar;
