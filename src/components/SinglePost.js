import React from "react";
import { Link, useParams } from "react-router-dom";

const SinglePost = ({ posts }) => {
  const { postId } = useParams();
  const post = posts.find((post) => postId === post._id);
  return (
    <div id="single-post">
      {post ? (
        <div>
          <h3>{post.title}</h3>
          <p>Posted by: {post.author.username}</p>
          <p>Price: {post.price}</p>
          <p>Location: {post.location}</p>
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
