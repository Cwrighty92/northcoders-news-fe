import React from "react";
import { Link } from "react-router-dom";
import "./Users.css";

const UsersBody = props => {
  return (
    <div className="user-tabs" >
      <div className="user-body" />
      <Link to={`/users/${props.user.username}`}>
        <p>
          {props.user.username} - {props.user.name}
        </p>
      </Link>
      <img
        className="user-profile-pic"
        alt="users avatar"
        src={props.user.avatar_url}
      />
    </div>
  );
};

export default UsersBody;
