import { url } from "inspector";
import React from "react";

const Banner = ({ movie }) => {
  console.log("movie???:", movie);
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.poster_path}` +
          ")",
      }}
    >
      Banner
    </div>
  );
};

export default Banner;

// backgroundImage:url
// 키 값 : string type으로 설정 되어야 함 해서
