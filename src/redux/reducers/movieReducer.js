let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upComingMovies: {},
};

function movieReducer(state, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popularMovies.data,
        topRatedMovies: payload.topRatedMovies.data,
        upComingMovies: payload.upComingMovies.data,
      };
    default:
      return { ...state };
  }
}

export default movieReducer;
