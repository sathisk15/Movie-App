import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/redux';
import SearchInput from '../utils/SearchInput';
import MovieBox from './MovieBox';

const MovieContent = () => {
  const { movie } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  let title;
  if (movie.screenContent === 'popular') title = 'Popular Movies';
  if (movie.screenContent === 'trending') title = 'Trending Movies & T V Shows';
  if (movie.screenContent === 'tv') title = 'Popular TV Series';

  useEffect(() => {
    dispatch(movieAction('trending'));
  }, [dispatch]);

  return (
    <div className="movie-content">
      <div className="header">
        {movie.screenContent === 'search' ? <SearchInput /> : <h2>{title}</h2>}
      </div>
      {movie.results &&
        movie.results.map((data) => <MovieBox key={data.id} data={data} />)}
    </div>
  );
};

export default MovieContent;
