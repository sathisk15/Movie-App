import axios from 'axios';
const MOVIE_REQUEST_REQUEST = 'MOVIE_REQUEST_REQUEST';
const MOVIE_REQUEST_SUCCESS = 'MOVIE_REQUEST_SUCCESS';
const MOVIE_REQUEST_FAILED = 'MOVIE_REQUEST_FAILED';
const API_KEY = '20c575bf9f44538421f08161da824a42';

const movieAction = (item) => async (dispatch) => {
  dispatch({ type: MOVIE_REQUEST_REQUEST });
  let URL = `https://api.themoviedb.org/3/${item}/all/day?api_key=${API_KEY}`;

  try {
    let { data } = await axios.get(URL);
    dispatch({ type: MOVIE_REQUEST_SUCCESS, payload: data.results });
  } catch (error) {
    dispatch({ type: MOVIE_REQUEST_FAILED, payload: error });
    console.log(error);
  }
};

const movieReducer = (state = { movie: [] }, action) => {
  switch (action.type) {
    case MOVIE_REQUEST_REQUEST:
      return { loading: true, movie: [] };
    case MOVIE_REQUEST_SUCCESS:
      return { loading: true, movie: action.payload };
    case MOVIE_REQUEST_FAILED:
      return {};
    default:
      return state;
  }
};

export { movieAction, movieReducer };
