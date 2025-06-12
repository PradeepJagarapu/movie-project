import React from "react";
import "./MovieList.css";
import MovieCard2 from "./MovieCard2";

const MovieList2 = () => {
  return (
    <section className="movie_list">
      <header className="movie_list_header">
        <h2 className="movie_list_heading">Popular</h2>
        <div className="movie_list_fs">
          <ul className="movie_filter">
            <li className="movie_filter_item active">8+ Star</li>
            <li className="movie_filter_item">7+ Star</li>
            <li className="movie_filter_item">6+ Star</li>
          </ul>

          <select name="" id="" className="movie_sorting">
            <option value="">SortBy</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>
          <select name="" id="" className="movie_sorting">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>
      <div className="movie_cards">
        <MovieCard2 />
      </div>
    </section>
  );
};

export default MovieList2;
