import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieBox from './MovieBox';

const MovieContent = () => {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    async function x() {
      let data = await axios.get(
        'https://api.themoviedb.org/3/trending/all/day?api_key=20c575bf9f44538421f08161da824a42'
      );
      setMovieData(() => data.data.results);
    }
    x();
  }, []);
  return (
    <div className="movie-content">
      {movieData.map((data) => (
        <MovieBox key={data.id} data={data} />
      ))}
    </div>
  );
};

export default MovieContent;
