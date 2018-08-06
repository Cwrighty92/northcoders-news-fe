import React from "react";
import { Link } from "react-router-dom";
import "./Users.css";

const UsersBody = props => {
  return (
    <Link to={`/users/${props.user.username}`} className="user-link">
      <div className="user-tabs">
        <div className="user-body" />

        <h2 className="user-name-header">{props.user.username}</h2>

        <img
          className="user-profile-pic"
          alt="users avatar"
          src={props.user.avatar_url}
        />
      </div>
    </Link>
  );
};

export default UsersBody;
