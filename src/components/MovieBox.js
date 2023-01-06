import React from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';
const MovieBox = ({ data }) => {
  console.log(data.vote_average);
  return (
    <div className="movie-box">
      <img
        src={`https://image.tmdb.org/t/p/w1280${data.poster_path}`}
        alt="Spyderman"
      />
      <div className="movie-details">
        <div className="name">{data.original_title || data.name}</div>
        <div className="details">
          <div className="type" style={{ textTransform: 'uppercase' }}>
            {data.media_type == 'tv'
              ? data.media_type + ' Series'
              : data.media_type}
          </div>
          <div className="date">{data.release_date || data.first_air_date}</div>
        </div>
        <div className="rating">
          <StarRateIcon />
          <StarRateIcon />
          <StarRateIcon />
          <StarRateIcon />
          <StarRateIcon />
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
