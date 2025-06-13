import { useState, useEffect } from "react";
import MovieCard from "./MovieList/MovieCard";
import { Link } from "react-router-dom";

const API_KEY = process.env.TMDB_API_KEY;

console.log("API KEY:", API_KEY);

const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;

const Upcoming = function () {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    const fetchedData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setMovieData(data);
    };

    fetchedData();
  }, []);

  return (
    <main id="movie-list">
      {movieData?.results?.map((movie, index) => (
        <Link key={index} to={"/movie/" + movie.id}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </main>
  );
};

export default Upcoming;
