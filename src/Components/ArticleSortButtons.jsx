import React from "react";
const ArticleSortButtons = props => {
  return (
    <div className="sort-buttons">
      {" "}
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

export default ArticleSortButtons;
