import React, { useState } from "react";
import { useHistory } from "react-router";

const styles = {
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "16px",
    alignItems: "center",
  },
  searchInput: {
    margin: "0 16px",
  },
};

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

const Posts = ({ posts }) => {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");

  const postsToDisplay = posts.filter((post) => postMatches(post, searchTerm));
  console.log("POST COMPONENT", posts);
  return (
    <>
      <div style={styles.searchContainer}>
        <h2>Posts</h2>
        <input
          style={styles.searchInput}
          type="text"
          placeholder="Search Posts"
          value={searchTerm}
          onChange={(event) => {
            console.log(event.target.value);
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
