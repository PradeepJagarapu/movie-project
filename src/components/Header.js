import React from "react";
import { Link } from "react-router-dom";

const Header = function () {
  return (
    <>
      <header id="header">
        <Link to="/">
          <h1 className="app-title">MovieDb</h1>
        </Link>

        <nav className="nav-links">
          <Link to="/popular">Popular</Link>
          <Link to="/top-rated">Top Rated</Link>
          <Link to="/upcoming">Upcoming</Link>
          <input
            type="text"
            placeholder="Movie Name"
            className="search-input"
          />
          <button className="search-btn">Search</button>
        </nav>
      </header>
    </>
  );
};

export default Header;
