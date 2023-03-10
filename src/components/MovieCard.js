import React from "react";

const MovieCard = ({ item }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "url(" +
          `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${item.poster_path}` +
          ")",
      }}

      //   style={{
      //     backgroundImage:
      //       "url('https://image.tmdb.org/t/p/w1920_and_h800_multi_face/t/p/w355_and_h200_multi_faces/2s0GN09uK37TLvWlP7YauVi29CH.jpg')",
      //   }}
    ></div>
  );
};

export default MovieCard;
