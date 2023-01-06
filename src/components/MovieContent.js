import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/redux';
import MovieBox from './MovieBox';

const MovieContent = () => {
  const { loading, movie } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieAction('trending'));
  }, [dispatch]);

  return (
    <div className="movie-content">
      {movie.map((data) => (
        <MovieBox key={data.id} data={data} />
      ))}
    </div>
  );
};

export default MovieContent;
