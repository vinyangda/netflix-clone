import api from "../api";

function getMovies() {
  return async (dispatch) => {
    const popularMovieApi = await api.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=0b19239f3136239b18c1dfc58309a223&language=en-US&page=1`
    );

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
