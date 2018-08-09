import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./Articles.css";
import "../Article/Article.css";
import PropTypes from "prop-types";
import VoteButtons from "../Article/VoteButtons";
const JoinArticleBody = props => {
  if (props.articles)
    return (
      <div className="article-tabs">
        <div className="article-body">
          <Link to={`/articles/${props.article._id}`} className="article-title">
            <h3>{props.article.title}</h3>
          </Link>
          <br />
          <p>Created By: {props.article.created_by.username}</p>
          <p>{moment(props.article.created_at).format("llll")}</p>
          <p>Votes: {props.article.votes}</p>
          <p>Comments: {props.article.commentCount}</p>
        </div>
      </div>
    );
  else
    return (
      <div className="single-article">
        <div className="article-body">
          <h3 className="article-title">{props.article.title}</h3>
          <p>
            Created by:
            {props.article.title && props.article.created_by.username}
          </p>
          <p>{props.article.body}</p>
          <p>Votes: {props.article.votes}</p>
          {props.currentUser && (
            <VoteButtons
              handleVote={props.handleVote}
              article={props.article}
            />
          )}
        </div>
      </div>
    );
};

JoinArticleBody.propTypes = {
  article: PropTypes.object.isRequired
};

export default JoinArticleBody;
