import React, { useState } from "react";

const API_ROOT = `https://strangers-things.herokuapp.com/api/2108-LSU-RM-WEB-PT/users/`;
const API_REGISTER = `${API_ROOT}register`;
const API_LOGIN = `${API_ROOT}login`;

const AccountForm = ({ action }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isLogin = action === "login";
  const title = isLogin ? "Login" : "Register";

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    try {
      const response = await fetch(API_REGISTER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      });

      const { data } = await response.json();
      const token = data.token;
      const message = data.message;
      console.log(`Token: ${token}`);
      console.log(`Message: ${message}`);
    } catch (error) {
      console.error(`Error registering a User ${error}`);
    }
  };
  return (
    <>
      <h4>Register</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default AccountForm;
