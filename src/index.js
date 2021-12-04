import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AccountForm } from "./components";

const App = () => {
  const [token, setToken] = useState("");
  return (
    <>
      <h1>Stranger's Things</h1>

      <Route path="/register">
        <AccountForm action="register" setToken={setToken} />
      </Route>
      <Route path="/login">
        <AccountForm action="login" setToken={setToken} />
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
