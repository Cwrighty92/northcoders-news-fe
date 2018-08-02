import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./styles/Articles.css";
class Articles extends Component {
  render() {
    let filteredArticles = [];
    if (this.props.topicId) {
      filteredArticles = this.props.articles.filter(article => {
        return article.belongs_to === this.props.topicId;
      });
    } else {
      filteredArticles = [...this.props.articles];
    }

    return (
      // seperate this out
      <div className="article-window">
        <h3>Articles({filteredArticles.length})</h3>
        <div className="sort-buttons">
          <button
            className="sort-button"
            onClick={() => {
              this.props.sortArticlesByVotes("pop");
            }}
          >
            Top Articles
          </button>
          <button
            className="sort-button"
            onClick={() => {
              this.props.sortArticlesByVotes("time");
            }}
          >
            Most Recent
          </button>
        </div>
        {filteredArticles.map(article => {
          //Seperate this out
          return (
            <div className="article-tabs" key={article._id}>
              <div className="article-body">
                <Link to={`/articles/${article._id}`}>
                  <h3>{article.title}</h3>
                </Link>
                <br />
                <p>Created By: {article.created_by.username}</p>
                <p>{moment(article.created_at).format("llll")}</p>
                <p>Votes: {article.votes}</p>
                <p>Comments: {article.commentCount}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Articles;
