import React from "react";
import { MovieIMG } from "./styles";

const MovieList = ({
  movies,
  title,
  image,
  poster_path,
  popularity,
  release_date,
  post,
}) => {
  return (
    <div>
      {movies.map((movie, index) => (
        <div className="movie">
          {movie.title}
          {/* {movie.popularity}
          {movie.release_date} */}
          <MovieIMG
            style={{ width: "300px", height: "300px" }}
            src={`https://image.tmdb.org/t/p/w200/` + movie.poster_path}
            alt="movie"
          ></MovieIMG>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
