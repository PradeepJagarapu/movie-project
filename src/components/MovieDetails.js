import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CastDetails from "./CastDetails";

console.log("CastDetails:", CastDetails);

const API_KEY = process.env.TMDB_API_KEY;
const imgURLPrefix = "https://image.tmdb.org/t/p/w500";
const bgURLPrefix = "https://image.tmdb.org/t/p/original";

function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setMovieDetails(data);
    };

    fetchData();
  }, []);
  return (
    <div id="movie-details">
      {/* Top Hero Section */}
      <div className="movie-details-hero">
        <div
          className="movie-details-bg"
          style={{
            backgroundImage: `url(${
              bgURLPrefix + movieDetails?.backdrop_path
            })`,
          }}
        ></div>
        <div className="movie-details-overlay"></div>

        <div className="movie-details-container">
          <img
            className="movie-details-poster"
            src={imgURLPrefix + movieDetails?.poster_path}
            alt="Poster"
          />
          <div className="movie-details-content">
            <h2 className="movie-details-title">{movieDetails?.title}</h2>
            <p className="movie-details-rating">
              ⭐ {movieDetails?.vote_average}
            </p>
            <p className="movie-details-overview">{movieDetails?.overview}</p>
          </div>
        </div>
      </div>

      {/* Cast section outside background area */}
      <CastDetails id={id} />
    </div>
  );
}

export default MovieDetails;
