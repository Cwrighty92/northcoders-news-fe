import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./Articles.css";
import PropTypes from "prop-types";
import VoteButtons from "./VoteButtons";

const JoinArticleBody = props => {
  return (
    <div className="article-tabs">
      <div className="article-body">
        {props.articles && (
          <Link
            to={`/articles/${props.article._id}`}
            className="articles-title"
          >
            <h3>{props.article.title}</h3>
          </Link>
        )}
        {!props.articles && (
          <h3 className="article-title">{props.article.title}</h3>
        )}

        <Link
          className="articles-title"
          to={`/users/${props.article.created_by.username}`}
        >
          Author: {props.article.created_by.username} on{" "}
          {moment(props.article.created_at).format("llll")}
        </Link>

        {!props.articles && <p>{props.article.body}</p>}
        <p>Votes: {props.article.votes}</p>
        {!props.articles &&
          props.currentUser && (
            <VoteButtons
              handleVote={props.handleVote}
              article={props.article}
            />
          )}
        <p>Comments: {props.article.commentCount}</p>
      </div>
    </div>
  );
};

JoinArticleBody.propTypes = {
  article: PropTypes.object.isRequired,
  handleVote: PropTypes.func,
  currentUser: PropTypes.object,
  articles: PropTypes.string
};

export default JoinArticleBody;
