import axios from "axios";
const apiUrl = "https://wrichri-northcoders-news.herokuapp.com/api";

export const fetchArticles = () => {
  return axios.get(`${apiUrl}/articles`);
};

export const fetchTopics = () => {
  return axios.get(`${apiUrl}/topics`);
};

export const fetchUsers = () => {
  return axios.get(`${apiUrl}/users`);
};

export const fetchUser = usernameid => {
  return axios.get(`${apiUrl}/users/${usernameid}`);
};

export const fetchArticleByTopic = topicid => {
  return axios.get(`${apiUrl}/topics/${topicid}/articles`);
};

export const fetchArticle = articleid => {
  return axios.get(`${apiUrl}/articles/${articleid}`);
};

export const upVoteArticle = articleid => {
  return axios.put(`${apiUrl}/articles/${articleid}?vote=up`);
};

export const downVoteArticle = articleid => {
  return axios.put(`${apiUrl}/articles/${articleid}?vote=down`);
};

export const upVoteComment = commentid => {
  return axios.put(`${apiUrl}/comments/${commentid}?vote=up`);
};

export const downVoteComment = commentid => {
  return axios.put(`${apiUrl}/comments/${commentid}?vote=down`);
};

export const fetchArticleComments = articleid => {
  return axios.get(`${apiUrl}/articles/${articleid}/comments`);
};

export const postComment = (articleid, data) => {
  return axios.post(`${apiUrl}/articles/${articleid}/comments`, data);
};

export const fetchUserComments = () => {
  return axios.get(`${apiUrl}/comments`);
};

export const deleteComment = commentid => {
  return axios.delete(`${apiUrl}/comments/${commentid}`);
};
