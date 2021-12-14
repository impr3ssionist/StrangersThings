import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const SinglePost = ({ posts }) => {
  const { postId } = useParams();
  const post = posts.find((post) => postId === post._id);
  return (
    <div id="single-post">
      {post ? (
        <div class="post-info">
          <h3 class="post-title">{post.title}</h3>
          <p id="seller">Seller: {post.author.username}</p>
          <p class="location">Location: {post.location}</p>
          <p class="description">Price: {post.price}</p>
          <p>Delivers: {post.willDeliver ? "Yes" : "No"}</p>
          <Link to="/posts/{post._id}/edit">Edit This Post</Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SinglePost;
