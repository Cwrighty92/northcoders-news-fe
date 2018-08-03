import React from "react";
import "./User.css";
const UserBody = props => {
  return (
    <div className="user-pane">
      <p>{props.user.username}</p>
      <img
        className="user-profile-pic"
        src={props.user.avatar_url}
        alt="user avatar"
      />
    </div>
  );
};

export default UserBody;
