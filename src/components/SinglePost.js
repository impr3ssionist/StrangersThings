import React from "react";
import { useParams } from "react-router-dom";

const SinglePost = ({ posts }) => {
  const { postId } = useParams();
  const post = posts.find((post) => postId === post._id);
  console.log("SINGLE POST", post);
  return <>Single Post!</>;
};

export default SinglePost;
