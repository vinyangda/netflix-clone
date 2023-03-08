import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";

import { movieAction } from "../redux/action/movieAction";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies } = useSelector(
    (state) => state.movie
  );
  console.log("Home comp :", popularMovies);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  return (
    <div>
      <Banner movie={popularMovies.results[0]} />
    </div>
  );
};

export default Home;
