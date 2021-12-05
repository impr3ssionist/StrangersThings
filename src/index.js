import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AccountForm } from "./components";
import { callApi } from "./api";

const App = () => {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState({});

  const fetchUserData = async (token) => {
    const { data } = await callApi({
      url: "/users/me",
      token,
    });
    return data;
  };

  useEffect(async () => {
    if (!token) {
      localStorage.getItem("token");
      return;
    }
    const data = await fetchUserData(token);
    if (data && data.username) {
      setUserData(data);
    }
  }, [token]);

  return (
    <>
      <h1>Stranger's Things</h1>
      {userData.username && <div>Hello {userData.username}</div>}

      <Route path="/register">
        <AccountForm
          action="register"
          setToken={setToken}
          setUserData={setUserData}
        />
      </Route>
      <Route path="/login">
        <AccountForm
          action="login"
          setToken={setToken}
          setUserData={setUserData}
        />
      </Route>
    </>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
