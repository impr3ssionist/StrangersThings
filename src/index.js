import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {
  AccountForm,
  Posts,
  SinglePost,
  NewPostForm,
  Nav,
  Login,
} from "./components";
import { callApi } from "./api";

const App = () => {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);

  const fetchUserData = async (token) => {
    const { data } = await callApi({
      url: "/users/me",
      token,
    });
    return data;
  };

  const fetchPosts = async () => {
    const {
      data: { posts },
    } = await callApi({
      url: "/posts",
    });
    return posts;
  };

  useEffect(async () => {
    // const posts = await fetchPosts();
    // setPosts(posts);
    if (!token) {
      setToken(localStorage.getItem("token"));
      return;
    }
    const data = await fetchUserData(token);
    if (data && data.username) {
      setUserData(data);
    }
  }, [token]);

  useEffect(async () => {
    const posts = await fetchPosts();
    setPosts(posts);
  }, []);
  console.log("UserData:", userData);

  return (
    <>
      {userData.username && (
        <h1>Welcome back to Stranger's Things {userData.username}</h1>
      )}
      {!userData.username && <h1>Welcome to Stranger's Things</h1>}
      <Nav />

      <Switch>
        <Route exact path="/"></Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/posts">
          <Posts
            posts={posts}
            token={token}
            setPosts={setPosts}
            userData={userData}
          />
        </Route>
        <Route path="/posts/new">
          <NewPostForm
            token={token}
            setPosts={setPosts}
            posts={posts}
            action="add"
          />
        </Route>
        <Route path="/posts/:postId/edit">
          <NewPostForm
            token={token}
            setPosts={setPosts}
            posts={posts}
            action="edit"
          />
        </Route>
        <Route path="/posts/:postId">
          <SinglePost posts={posts} />
        </Route>
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
      </Switch>
    </>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
