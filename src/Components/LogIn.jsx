import React from "react";
import { Link } from "react-router-dom";

const LogIn = props => {
  return (
    <div className="log-in-page">
      <Link to="/articles">
        <button
          onClick={() => {
            props.handleLogIn("in");
          }}
        >
          LogIn
        </button>
      </Link>
      <input value="tickle122" readOnly />
    </div>
  );
};

export default LogIn;
