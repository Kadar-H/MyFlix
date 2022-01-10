import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import MovieList from "./Components/MovieList/MovieList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "@material-ui/icons";
import Liked from "./Components/Pages/Liked";

function App() {
  const [movies, setMovies] = useState([]);

  const getMovieList = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=c9c4faac5abeb254d86a2b3a22f08fd6"
      )
      .then((response) => {
        console.log(response);
        setMovies([...response.data.results]);
      });
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <Router className="app">
      <Hero />
      <Routes>
        <Route exact path="/liked" elements={<Liked />} />
      </Routes>
      <div className="App" styles={{ width: "100%", height: "100%" }}>
        <MovieList movies={movies} />
      </div>
    </Router>
  );
}

export default App;

// const getMovieList = async () => {
