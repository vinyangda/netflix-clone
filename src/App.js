import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;

//HomePage, moviePage, movieDtailePage

// HomePage
// 3개의 섹션이 있다 (Popular, Top Rated, Upcoming)
// 배너에서 제목, 장르, 점수, 인기도, 청불여부 를 볼 수 있다
// 배너는 슬라이스로 넘겨 볼 수 있다

//movieDtailePage
//디테일한 정보를 볼 수 있다
//(포스터, 영화 제목, 평점, 인기도 청불여부, 줄거리 요약, 예산, 날짜, 시간, 리뷰, 예고편, 관련영화 등이 있다.)
//트레일러를 볼 수 있다
//리뷰 확인 가능
//추천 관련 영상이 하단에 노출

//영화 검색을 할 수 있다.
//영화 정렬을 할 수 있다
// 영화를 필터링 할 수 있다.
