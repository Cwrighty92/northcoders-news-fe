import React from "react";
import "./Article.css";
import PropTypes from "prop-types";
const VoteArticleButtons = props => {
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
};

VoteArticleButtons.propTypes = {
  handleVote: PropTypes.func.isRequired
};

export default VoteArticleButtons;
