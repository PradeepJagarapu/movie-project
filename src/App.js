import React from "react";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import MovieList2 from "./components/MovieList2";

function App() {
  return (
    <>
      <NavBar />
      {/* <Outlet /> */}
      <MovieList2 />
      <Footer />
    </>
  );
}

export default App;
