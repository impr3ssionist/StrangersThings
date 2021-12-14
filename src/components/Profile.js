import React, { useState, useEffect } from "react";
import { callApi } from "../api";

const Profile = ({ userData, token }) => {
  const API_URL = `/users/me`;
  const [profileData, setProfileData] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(userData.posts);
  }, [userData]);

  const handleSubmit = async (postId) => {
    const API_URL = `/posts/${postId}`;
    event.preventDefault();
    try {
      await callApi({
        url: API_URL,
        method: "delete",
        token: token,
      });
      const remainingPosts = posts.filter((post) => post._id !== postId);
      setPosts(remainingPosts);
    } catch (error) {
      console.error(error);
    }
  };

  const getProfile = async () => {
    const data = await callApi({
      url: API_URL,
      token,
    });

    setProfileData(data);
  };

  console.log("DATA", userData);
  console.log("POSTS", userData.posts);

  return (
    <div>
      <h1>This is where your information lives, {userData.username}</h1>
      {posts && posts.length ? (
        <h2>
          Listings you've created:{" "}
          {posts.map((post) => {
            return (
              <div key={post._id} style={{ border: "1px solid black" }}>
                <h5>{post.title}</h5>
                <div>Posted by: {post.author.username}</div>
                <div>Description: {post.description}</div>
                <div>Location: {post.location}</div>
                <button onClick={() => handleSubmit(post._id)}>
                  Delete Post
                </button>
              </div>
            );
          })}
        </h2>
      ) : (
        <h2>You haven't created any posts yet.</h2>
      )}

      {userData.messages === [] ? (
        <h3>Inbox {userData.messages}</h3>
      ) : (
        <h3>There are no messages to display</h3>
      )}
    </div>
  );
};

export default Profile;

//messages may need to be converted to a string to parse correctly

//could replace getProfile with a getMessages function
