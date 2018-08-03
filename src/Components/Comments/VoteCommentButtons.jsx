import React from "react";
import "./Comments.css";
import PropTypes from "prop-types";
const VoteCommentButtons = props => {
  return (
    <div>
      <button
        onClick={() => {
          props.handleVote(props.comment, "up");
        }}
      >
        Vote Up
      </button>
      <button
        onClick={() => {
          props.handleVote(props.comment, "down");
        }}
      >
        Vote Down
      </button>
    </div>
  );
};
VoteCommentButtons.propTypes = {
  comment: PropTypes.object.isRequired,
  handleVote: PropTypes.func.isRequired
};

export default VoteCommentButtons;
