import React from "react";

const imgURLPrefix = "https://image.tmdb.org/t/p/w500";

function MovieCard(props) {
  const { movie } = props;
  return (
    <div className="movie-card">
      <img
        src={imgURLPrefix + movie.poster_path}
        alt="Poster"
        className="movie-poster"
      />
      <h3 className="movie-title">{movie.title}</h3>
      <p className="movie-rating">Rating: {movie.vote_average}</p>
    </div>
  );
}

export default MovieCard;
