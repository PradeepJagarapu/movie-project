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
  const [youTubeKey, setyouTubeKey] = useState(null);

  const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    const fetchData = async () => {
      const [movieRes, videoRes] = await Promise.all([
        fetch(movieUrl),
        fetch(videoUrl),
      ]);
      const movieData = await movieRes.json();
      const videoData = await videoRes.json();
      setMovieDetails(movieData);

      const trailer = videoData?.results?.find(
        (vid) => vid.site === "YouTube" && vid.type === "Trailer"
      );

      if (trailer) setyouTubeKey(trailer.key);
    };

    fetchData();
  }, [id]);
  return (
    <div id="movie-details">
      {/* Top Hero Section */}
      <div className="movie-details-hero">
        {/* <div
          className="movie-details-bg"
          style={{
            backgroundImage: `url(${
              bgURLPrefix + movieDetails?.backdrop_path
            })`,
          }}
        ></div> */}
        {youTubeKey ? (
          <div className="movie-details-bg-video">
            <iframe
              src={`https://www.youtube.com/embed/${youTubeKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youTubeKey}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Movie Trailer"
            ></iframe>
          </div>
        ) : (
          <div
            className="movie-details-bg"
            style={{
              backgroundImage: `url(${
                bgURLPrefix + movieDetails?.backdrop_path
              })`,
            }}
          ></div>
        )}
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
