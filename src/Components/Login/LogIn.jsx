import React from "react";
import "./LogIn.css";
import LogInButton from "./LogInButton";

const LogIn = props => {
  return (
    <div className="log-in-page">
      <div>
        <img
          className="login-profile-pic"
          src="https://gdpr.co.uk/marketing/img/login.png"
          alt="default user avatar"
        />
      </div>
      <div className="log-in-body">
        <input className="log-in-input" value="tickle122" readOnly />
        <LogInButton className="log-in-body" handleLogIn={props.handleLogIn} />
      </div>
    </div>
  );
};

export default LogIn;
