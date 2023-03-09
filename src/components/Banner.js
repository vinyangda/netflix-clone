import React from "react";
import movieReducer from "../redux/reducers/movieReducer";

const Banner = ({ movie }) => {
  console.log("movie???:", movie);
  return (
    <div
      className="banner-background-img"
      style={{
        backgroundImage:
          "url(" +
          `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}` +
          ")",
      }}
    >
      <div className="banenr-info">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
