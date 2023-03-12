import React from "react";
import { Badge } from "react-bootstrap";

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
    >
      <div className="overlay">
        <div>{item.title}</div>
        {item.genre_ids.map((id) => (
          <Badge bg="danger">{id}</Badge>
        ))}
      </div>
      <div>
        <span>{item.vote_average}</span>
        <div>{item.adult ? "청불" : "Under 18"}</div>
      </div>
    </div>
  );
};

export default MovieCard;
