import React from "react";
import "./Comments.css";

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

export default VoteCommentButtons;
