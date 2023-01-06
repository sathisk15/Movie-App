import React from 'react';

import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf';
const MovieDescription = ({ data, func }) => {
  console.log(data);
  const IMG_URL = 'https://image.tmdb.org/t/p/w1280';

  return (
    <>
      <div className="back-drop" onClick={func}></div>
      <div className="movie-description">
        <img
          src={IMG_URL + data.poster_path}
          alt={data.original_title || data.name}
        />
        <div className="details">
          <div className="title">
            <h1>{data.original_title || data.name}</h1>
          </div>
          <div className="description">
            <p>{data.overview}</p>
          </div>
          <div className="type-date">
            {data.media_type && <div className="type">{data.media_type}</div>}
            <div className="date">
              {data.formatData(data.release_date) ||
                data.formatData(data.first_air_date)}
            </div>
          </div>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((n) =>
              data.rating > n ? (
                <StarRateIcon key={n} />
              ) : data.rating >= n - 0.5 ? (
                <StarHalfIcon key={n} />
              ) : (
                <StarOutlineIcon key={n} />
              )
            )}
          </div>
          <button className="btn" onClick={func}>
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieDescription;
