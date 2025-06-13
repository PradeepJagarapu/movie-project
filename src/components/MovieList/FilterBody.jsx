import React from "react";

const FilterBody = ({ minRating, onRatingClick, ratings }) => {
  return (
    <ul className="movie_filter">
      {ratings.map((rate) => (
        <li
          key={rate}
          className={
            minRating === rate
              ? "movie_filter_item active"
              : "movie_filter_item"
          }
          onClick={() => {
            onRatingClick(rate);
          }}
        >
          {rate}+ Star
        </li>
      ))}
    </ul>
  );
};

export default FilterBody;
