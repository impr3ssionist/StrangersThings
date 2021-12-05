import React from "react";

const Posts = ({ posts }) => {
  console.log("POST COMPONENT", posts);
  return (
    <>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post._id} style={{ border: "1px solid black" }}>
          <h5>{post.title}</h5>
          <div>Posted by: {post.author.username}</div>
          <div>Description: {post.description}</div>
          <div>Location: {post.location}</div>
          <button onClick={() => console.log("clicked a post")}>
            Tell me more!
          </button>
        </div>
      ))}
    </>
  );
};

export default Posts;
