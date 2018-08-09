import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./Articles.css";
import "../Article/Article.css";
import PropTypes from "prop-types";
import VoteButtons from "../Article/VoteButtons";

const JoinArticleBody = props => {
  return (
    <div className="article-tabs">
      <div className="article-body">
        {props.articles && (
          <Link to={`/articles/${props.article._id}`} className="article-title">
            <h3>{props.article.title}</h3>
          </Link>
        )}
        {!props.articles && (
          <h3 className="article-title">{props.article.title}</h3>
        )}
        <p>Created By: {props.article.created_by.username}</p>
        {!props.articles && <p>{props.article.body}</p>}
        <p>{moment(props.article.created_at).format("llll")}</p>
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
  article: PropTypes.object.isRequired
};

export default JoinArticleBody;
