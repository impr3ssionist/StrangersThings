import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const API_ROOT = `https://strangers-things.herokuapp.com/api/2108-LSU-RM-WEB-PT/users/`;
const API_REGISTER = `${API_ROOT}register`;
const API_LOGIN = `${API_ROOT}login`;
const API_USER = `${API_ROOT}me`;

const AccountForm = ({ action, setToken, setUserData }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isLogin = action === "login";
  const title = isLogin ? "Login" : "Register";
  const oppositeTitle = isLogin ? "Register" : "Login";
  const oppositeAction = isLogin ? "Register" : "Login";
  const actionURL = isLogin ? API_LOGIN : API_REGISTER;
  const history = useHistory();

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
      if (token) {
        setToken(token);
        const userResponse = await fetch(API_USER, {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const { data } = await userResponse.json();
        console.log(data);
        setUserData(data);
        history.push("/");
      }
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
      <Link to="/">Go somewhere</Link>
    </>
  );
};

export default AccountForm;
