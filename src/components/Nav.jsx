import React from "react";


import "./Nav.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Nav({ onSearch }) {
  return (
    <div className="nav">
      <div>
        <Link to="/">
          <span className="navbar-brand">
            
          </span>
        </Link>
        <Link to="/about">
          <span>About</span>
        </Link>
      </div>
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
}

export default Nav;
