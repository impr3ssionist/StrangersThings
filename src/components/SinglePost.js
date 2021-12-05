import React from "react";
import { useParams } from "react-router-dom";

const SinglePost = ({ posts }) => {
  const { postId } = useParams();
  console.log("Post ID", postId);
  console.log("Single Posts", posts);
  return <>Single Post!</>;
};

export default SinglePost;
