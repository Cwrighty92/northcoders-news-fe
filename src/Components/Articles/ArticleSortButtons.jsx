import React from "react";
import "./Articles.css";
import PropTypes from "prop-types";
const ArticleSortButtons = props => {
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
};

ArticleSortButtons.propTypes = {
  sortArticles: PropTypes.func.isRequired
};

export default ArticleSortButtons;
