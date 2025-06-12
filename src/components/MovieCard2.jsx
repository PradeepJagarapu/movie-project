import React from "react";
import "./MovieCard.css";

const MovieCard2 = () => {
  return (
    <a href="" className="movie_card">
      <img
        src="https://i.pinimg.com/736x/96/cd/2e/96cd2eae6858a31ff1bc5aff11fd7b98.jpg"
        alt="movie poster"
        className="movie_poster"
      />
      <div className="movie_details">
        <h3 className="movie_details_heading">Movie Name</h3>
        <div className="movie_date_rate">
          <p>10-10-2025</p>
          <p>9.5</p>
        </div>
        <p className="movie_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          officia eum deleniti similique totam nobi
        </p>
      </div>
    </a>
  );
};

export default MovieCard2;
