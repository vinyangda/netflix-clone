import React from "react";

const MovieCard = ({ item }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` +
          ")",
      }}

      //   style={{
      //     backgroundImage:
      //       "url(`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/qKHjFK5tae0elB4zaDmicmjb5qI.jpg`)",
      //   }}
    ></div>
  );
};

export default MovieCard;
