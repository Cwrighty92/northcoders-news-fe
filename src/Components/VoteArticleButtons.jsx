import React from "react";
import "./styles/Article.css";

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

export default VoteArticleButtons;
