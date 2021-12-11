import React, { useState } from "react";
import { useHistory } from "react-router";
import { SinglePost } from "./SinglePost";
import { callApi } from "../api";

const method = "DELETE";

const postMatches = (post, searchTerm) => {
  const searchTermLower = searchTerm.toLowerCase();
  const {
    description,
    location,
    title,
    author: { username },
  } = post;

  const toMatch = [description, location, title, username];

  for (let i = 0; i < toMatch.length; i++) {
    const field = toMatch[i];
    if (field.toLowerCase().includes(searchTermLower)) {
      return true;
    }
  }
};

const Posts = ({ posts, token, setPosts, userData }) => {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");

  const postsToDisplay = posts.filter((post) => postMatches(post, searchTerm));

  const handleSubmit = async (postId) => {
    const API_URL = `/posts/${postId}`;
    event.preventDefault();
    try {
      await callApi({
        url: API_URL,
        method: method,
        token: token,
      });
      const remainingPosts = posts.filter((post) => post._id !== postId);
      setPosts(remainingPosts);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div id="posts-nav">
        <h2>Posts</h2>
        <input
          type="text"
          placeholder="Search Posts"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></input>
      </div>
      {postsToDisplay.length ? (
        postsToDisplay.map((post) => (
          <div key={post._id} style={{ border: "1px solid black" }}>
            <h5>{post.title}</h5>
            <div>Posted by: {post.author.username}</div>
            <div>Description: {post.description}</div>
            <div>Location: {post.location}</div>
            <button onClick={() => history.push(`/posts/${post._id}`)}>
              Tell me more!
            </button>
            {post.author.username === userData.username ? (
              <button onClick={() => handleSubmit(post._id)}>
                Delete Post
              </button>
            ) : null}
          </div>
        ))
      ) : (
        <div>
          <h1>There are no matching posts...</h1>
        </div>
      )}
    </>
  );
};

export default Posts;
