import React from "react";
import "./Article.css";
import VoteArticleButtons from "./VoteArticleButtons";
import PropTypes from "prop-types";

const ArticleBody = props => {
  return (
    <div className="single-article">
      <p>
        Created by:
        {props.article.title && props.article.created_by.username}
      </p>
      <p>{props.article.body}</p>
      <p>Votes: {props.article.votes}</p>
      {props.loggedIn && <VoteArticleButtons handleVote={props.handleVote} />}
    </div>
  );
};

ArticleBody.propTypes = {
  articleId: PropTypes.string,
  loggedIn: PropTypes.bool
};

export default ArticleBody;
