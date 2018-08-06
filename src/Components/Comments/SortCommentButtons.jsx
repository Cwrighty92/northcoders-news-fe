import React from "react";
import "./Comments.css";
import PropTypes from "prop-types";
const SortCommentButtons = props => {
  return (
    <div className="sort-buttons-comments">
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

SortCommentButtons.propTypes = {
  sortComments: PropTypes.func.isRequired
};
export default SortCommentButtons;
