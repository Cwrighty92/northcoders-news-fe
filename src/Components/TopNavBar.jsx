import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
const TopNavBar = () => {
  return (
    <nav className="nav-bar-header">
      <NavLink to={"/articles"} className="nav-item">
        Articles
      </NavLink>
      <NavLink to={"/users"} className="nav-item">
        Members
      </NavLink>
    </nav>
  );
};

export default TopNavBar;
