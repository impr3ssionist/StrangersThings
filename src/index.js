import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AccountForm } from "./components";

const App = () => {
  return (
    <>
      <h1>Stranger's Things</h1>

      <Route path="/register">
        <AccountForm action="register" />
      </Route>
      <Route path="/login">
        <AccountForm action="login" />
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
