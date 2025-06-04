import React from "react";

const imgURLPrefix =
  "https://image.tmdb.org/t/p/w500/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg";

function MovieCard() {
  return (
    <div className="movie-card">
      <img src={imgURLPrefix} alt="Poster" className="movie-poster" />
      <h3 className="movie-title">Movie Title</h3>
      <p className="movie-rating">Rating: 7.5</p>
    </div>
  );
}

export default MovieCard;
