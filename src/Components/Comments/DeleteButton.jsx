import React from "react";
import "./Comments.css";

const DeleteButton = props => {
  return (
    <div>
      <button
        onClick={() => {
          props.deleteComment(props.comment);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteButton;
