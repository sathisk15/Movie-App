import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/redux';
import SearchInput from '../utils/SearchInput';
import MovieBox from './MovieBox';
import MovieDescription from './MovieDescription';
const MovieContent = () => {
  const { movie } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const [details, setDetails] = useState();
  let title;
  if (movie.screenContent === 'popular') title = 'Popular Movies';
  if (movie.screenContent === 'trending') title = 'Trending Now';
  if (movie.screenContent === 'tv') title = 'Popular TV Series';

  useEffect(() => {
    dispatch(movieAction('trending'));
  }, [dispatch]);

  const showDetails = (data) => {
    setDetails(() => data);
  };
  const clearDetails = () => {
    setDetails(() => '');
  };

  return (
    <div className="movie-content">
      {details && <MovieDescription data={details} func={clearDetails} />}
      <div className="header">
        {movie.screenContent === 'search' ? <SearchInput /> : <h2>{title}</h2>}
      </div>
      {movie.results &&
        movie.results.map((data) => (
          <MovieBox showDetails={showDetails} key={data.id} data={data} />
        ))}
    </div>
  );
};

export default MovieContent;
