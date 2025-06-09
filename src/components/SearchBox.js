import React from "react";

const SearchBox = function () {
  return (
    <>
      <input type="text" placeholder="Movie Name" className="search-input" />
      <button className="search-btn">Search</button>
    </>
  );
};

export default SearchBox;
