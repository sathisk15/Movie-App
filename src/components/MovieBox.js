import React from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf';
const MovieBox = ({ data }) => {
  // To calculate rating
  let rating = 5 * ((data.vote_average * 10) / 100);

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
          {[1, 2, 3, 4, 5].map((n) =>
            rating > n ? (
              <StarRateIcon key={n} />
            ) : rating >= n - 0.5 ? (
              <StarHalfIcon key={n} />
            ) : (
              <StarOutlineIcon key={n} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
