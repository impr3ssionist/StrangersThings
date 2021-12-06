import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div id="nav-bar">
      <Link to="/posts">View Posts from Strangers!</Link>
      <Link to="/login">Register</Link>
      <Link to="/posts/new">Add a Post</Link>
    </div>
  );
};

export default Nav;
