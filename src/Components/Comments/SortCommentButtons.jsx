import React from "react";
import "./Comments.css";

const SortCommentButtons = props => {
  return (
    <div className="sort-buttons">
      <button
        className="sort-button"
        onClick={() => {
          props.sortComments("pop");
        }}
      >
        Popular Comments
      </button>
      <button
        className="sort-button"
        onClick={() => {
          props.sortComments("time");
        }}
      >
        Most Recent
      </button>
    </div>
  );
};

export default SortCommentButtons;
