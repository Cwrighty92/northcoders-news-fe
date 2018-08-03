import React from "react";
import "./Comments.css";
import PropTypes from "prop-types";
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
DeleteButton.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired
};
export default DeleteButton;
