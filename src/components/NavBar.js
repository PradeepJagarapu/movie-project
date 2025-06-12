import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

const NavBar = function () {
  return (
    <>
      <nav id="navbar">
        <Link to="/">
          <h1 className="app-title">Movie World</h1>
        </Link>

        <nav className="nav-links">
          <Link to="/popular" className="link">
            Popular
          </Link>
          <Link to="/top-rated" className="link">
            Top Rated
          </Link>
          <Link to="/upcoming" className="link">
            Upcoming
          </Link>
          {/* <input
            type="text"
            placeholder="Movie Name"
            className="search-input"
          />
          <button className="search-btn">Search</button> */}
          <SearchBox />
        </nav>
      </nav>
    </>
  );
};

export default NavBar;
