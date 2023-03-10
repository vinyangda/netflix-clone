import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";

import MovieSlide from "../components/MovieSlide";

import { movieAction } from "../redux/action/movieAction";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.movie);
  console.log("Home comp :", popularMovies);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  //정보를 받아오기도 전에 컴포넌트가 먼저 렌더가 되어
  //useEffect가 읽어 올 props의 정보를 받아 올 수 없었다.

  //useEffect의 조건부 렌더링이 필요하다
  //Redux를 사용하는 이유는 props를 안 쓰기 위해서가 아닌
  // 모든상황에서 props를 사용하는 걸 막기 위해 사용하는 것!

  //loading 이 true면 loading spinner를 보여주고
  //false면 받아온 데이터를 보여준다

  //true: 데이터 도착 전
  //false: 데이터 도착 후, 혹은 에러
  if (loading) {
    return <ClipLoader color="#fffff" loading={loading} size={150} />;
  }
  return (
    <div>
      <Banner movie={popularMovies.results[0]} />
      <h1>Popular Movie</h1>
      <MovieSlide movies={popularMovies} />
      <h1>Top Rated Movie</h1>
      <MovieSlide movies={topRatedMovies} />
      <h1>Upcoming Movie</h1>
      <MovieSlide movies={upComingMovies} />
    </div>
  );
};

export default Home;
