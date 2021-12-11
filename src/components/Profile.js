import React, { useState } from "react";
import { callApi } from "../api";

const Profile = ({ userData }) => {
  const API_URL = `/users/me`;
  const [profileData, setProfileData] = useState({});

  const getProfile = async () => {
    const data = await callApi({
      url: API_URL,
      token,
    });

    setProfileData(data);
    console.log("DATA", data);
  };

  return (
    <div>
      <h1>This is where your information lives, {userData.username}</h1>
      {userData.posts === [] ? (
        <h2>Listings you've created: {userData.posts}</h2>
      ) : (
        <h2>You haven't created any posts yet.</h2>
      )}

      {userData.messages === [] ? (
        <h3>Inbox {userData.messages}</h3>
      ) : (
        <h3>No messages to display</h3>
      )}
    </div>
  );
};

export default Profile;

//messages may need to be converted to a string to parse correctly

//could replace getProfile with a getMessages function
