import React from "react";

const Home = (
  movies,
  title,
  image,
  poster_path,
  popularity,
  release_date,
  post
) => {
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
    {movies.map((movie, index) => (
      <div className="movie">
        {movie.title}
 
        <MovieIMG
          style={{ width: "300px", height: "300px" }}
          src={`https://image.tmdb.org/t/p/w200/` + movie.poster_path}
          alt="movie"
        ></MovieIMG>
      </div>
    ))}
  );
};

export default Home;
