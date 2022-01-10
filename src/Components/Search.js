import React from "react";

const Search = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        placeholder="Search your Favorite movies"
        value={props.Movie}
        onChange={(event) => props.setSearchMovie(event.target.value)}
      ></input>
    </div>
  );
};

export default Search;
