import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";
const LogInButton = props => {
  return (
    <Link to="/articles">
      <button
        className="log-in-button"
        onClick={() => {
          props.handleLogIn("in");
        }}
      >
        LogIn
      </button>
    </Link>
  );
};

export default LogInButton;
