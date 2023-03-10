import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
// console.log(API_KEY);

function getMovies() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQ" });
      const popularMovieApi = await api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const topRateApi = api.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      const upComingApi = api.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );
      let [popularMovies, topRatedMovies, upComingMovies] = await Promise.all([
        popularMovieApi,
        topRateApi,
        upComingApi,
      ]);
      dispatch({
        type: "GET_MOVIES_SUCCESS",

        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upComingMovies: upComingMovies.data,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }

    //api정보들을 병렬로 한꺼번에 불러준다 await으로 전체의 데이터를 불러온다
    // console.log(data);
    // let url = 'https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1'
    // let res = await fetch(url)
    // let data = await res.json()
  };
}

//'https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1'
//"https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1"

export const movieAction = {
  getMovies,
};
