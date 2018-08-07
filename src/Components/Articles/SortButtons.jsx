import React from "react";
import "./Articles.css";
import PropTypes from "prop-types";
const SortButtons = props => {
  if (props.sortArticles) {
    return (
      <div className="sort-buttons">
        <button
          className="sort-button"
          onClick={() => {
            props.sortArticles("pop");
          }}
        >
          Top Articles
        </button>
        <button
          className="sort-button"
          onClick={() => {
            props.sortArticles("time");
          }}
        >
          Most Recent
        </button>
      </div>
    );
  } else if (props.sortComments) {
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
  }
};

SortButtons.propTypes = {
  sortArticles: PropTypes.func,
  sortComments: PropTypes.func
};

export default SortButtons;
