import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/redux';
import MovieBox from './MovieBox';

const MovieContent = () => {
  const { loading, movie } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      movieAction(
        'https://api.themoviedb.org/3/trending/all/day?api_key=20c575bf9f44538421f08161da824a42&language=en-US&page=1'
      )
    );
  }, [dispatch]);

  return (
    <div className="movie-content">
      {movie && movie.map((data) => <MovieBox key={data.id} data={data} />)}
    </div>
  );
};

export default MovieContent;
