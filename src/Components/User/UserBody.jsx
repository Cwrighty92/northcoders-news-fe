import React from "react";
import "./User.css";
const UserBody = props => {
  return (
    <div className="user-pane">
      <div className="user-tabs">
        <h1 className="username-title">{props.user.username}</h1>
        <img
          className="user-profile-pic"
          src={props.user.avatar_url}
          alt="user avatar"
        />
      </div>
    </div>
  );
};

export default UserBody;
