import React from "react";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList/MovieList";

function App() {
  return (
    <>
      <NavBar />
      {/* <Outlet /> */}
      <MovieList type="popular" title="Popular" />
      <MovieList type="top_rated" title="Top Rated" />
      <MovieList type="upcoming" title="Upcoming" />
      <Footer />
    </>
  );
}

export default App;
