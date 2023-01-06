import axios from 'axios';
const MOVIE_REQUEST_REQUEST = 'MOVIE_REQUEST_REQUEST';
const MOVIE_REQUEST_SUCCESS = 'MOVIE_REQUEST_SUCCESS';
const MOVIE_REQUEST_FAILED = 'MOVIE_REQUEST_FAILED';

const key = '20c575bf9f44538421f08161da824a42';

const movieAction =
  (item, page = 1) =>
  async (dispatch) => {
    dispatch({ type: MOVIE_REQUEST_REQUEST });

    let URL;
    let popular = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${page}`;
    let trending = `https://api.themoviedb.org/3/trending/all/day?api_key=${key}&language=en-US&page=${page}`;
    let tv = `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=${page}`;

    if (item === 'popular') URL = popular;
    else if (item === 'trending') URL = trending;
    else if (item === 'tv') URL = tv;
    else if (item === 'search') URL = '/';
    else {
      URL = item + page;
      item = 'search';
    }
    try {
      let { data } = await axios.get(URL);
      dispatch({
        type: MOVIE_REQUEST_SUCCESS,
        payload: { ...data, screenContent: item },
      });
    } catch (error) {
      dispatch({ type: MOVIE_REQUEST_FAILED, payload: error });
      console.log(error);
    }
  };

const movieReducer = (state = { movie: { page: 0 } }, action) => {
  switch (action.type) {
    case MOVIE_REQUEST_REQUEST:
      return { loading: false, movie: { page: 0 } };
    case MOVIE_REQUEST_SUCCESS:
      return { loading: true, movie: action.payload };
    case MOVIE_REQUEST_FAILED:
      return {};
    default:
      return state;
  }
};

export { movieAction, movieReducer };
