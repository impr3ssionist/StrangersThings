import React, { useState } from "react";

const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2108-LSU-RM-WEB-PT";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`${BASE_URL}/users/login`, {
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

    if (response) {
      const data = await response.json();
      console.log(data);
      localStorage.setItem("token", token);
      setUsername("");
      setPassword("");
    }

    setUsername("");
    setPassword("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          placeholder="Enter Username"
          onChange={(event) => setUsername(event.target.value)}
        ></input>

        <label>Password</label>
        <input
          type="text"
          value={password}
          placeholder="Enter Password"
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
