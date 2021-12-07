import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div id="nav-bar">
      <div id="nav-links">
        <Link to="/posts">View Posts from Strangers!</Link>
        {isLoggedIn ? (
          <Link
            to="/"
            onClick={() => {
              localStorage.removeItem("token");
              setIsLoggedIn(false);
            }}
          >
            Logout
          </Link>
        ) : (
          <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )}

        <Link to="/posts/new">Add a Post</Link>
      </div>
    </div>
  );
};

export default Nav;
