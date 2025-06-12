import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SearchBox = function () {
  return (
    <>
      <input type="text" placeholder="Movie Name" className="search-input" />
      <Link to="">
        <button className="search-btn">Search</button>
      </Link>
    </>
  );
};

export default SearchBox;
