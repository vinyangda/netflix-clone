import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
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
          <Badge bg="danger">
            {genreList.find((item) => item.id == id).name}
          </Badge>
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
