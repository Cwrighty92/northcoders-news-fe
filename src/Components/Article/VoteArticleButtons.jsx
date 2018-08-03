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
      >
        Vote Up
      </button>
      <button
        onClick={() => {
          props.handleVote("down");
        }}
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
