import React, { useEffect, useState } from "react";
import lodash from "lodash";

import "./MovieList.css";
import MovieCard from "./MovieCard";
import FilterBody from "./FilterBody";

const API_KEY = process.env.TMDB_API_KEY;

const MovieList = ({ type, title }) => {
  const [movies, setmovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [minRating, setminRating] = useState(0);
  const [sort, setSort] = useState({ by: "default", order: "asc" });

  const url = `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=1`;

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const res = await fetch(url);
    const data = await res.json();

    setmovies(data.results);
    setFilteredMovies(data.results);
  };

  const handleFilter = (rate) => {
    if (rate === minRating) {
      setminRating(0);
      setFilteredMovies(movies);
    } else {
      setminRating(rate);
      const filteredData = movies?.filter(
        (movie) => movie.vote_average >= rate
      );

      setFilteredMovies(filteredData);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;

    setSort((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = lodash.orderBy(
        filteredMovies,
        [sort.by],
        [sort.order]
      );

      setFilteredMovies(sortedMovies);
    }
  }, [sort]);

  return (
    <section className="movie_list">
      <header className="movie_list_header">
        <h2 className="movie_list_heading">{title}</h2>
        <div className="movie_list_fs">
          <FilterBody
            minRating={minRating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6]}
          />
          <select
            name="by"
            id=""
            onChange={handleSort}
            value={sort.by}
            className="movie_sorting"
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            name="order"
            onChange={handleSort}
            value={sort.order}
            id=""
            className="movie_sorting"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>
      <div className="movie_cards">
        {filteredMovies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
