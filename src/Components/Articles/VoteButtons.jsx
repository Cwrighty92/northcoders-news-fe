import React from "react";
import "./Articles.css";
import PropTypes from "prop-types";
const VoteArticleButtons = props => {
  if (props.comment) {
    return (
      <div>
        <button
          onClick={() => {
            props.handleVote("up", props.comment);
          }}
          className="vote-up-button"
        >
          Vote Up
        </button>
        <button
          onClick={() => {
            props.handleVote("down", props.comment);
          }}
          className="vote-down-button"
        >
          Vote Down
        </button>
      </div>
    );
  } else if (props.article) {
    return (
      <div>
        <button
          onClick={() => {
            props.handleVote("up");
          }}
          className="vote-up-button"
        >
          Vote Up
        </button>
        <button
          onClick={() => {
            props.handleVote("down");
          }}
          className="vote-down-button"
        >
          Vote Down
        </button>
      </div>
    );
  }
};

VoteArticleButtons.propTypes = {
  handleVote: PropTypes.func.isRequired
};

export default VoteArticleButtons;
