import React from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf';
const MovieBox = ({ data }) => {
  const IMG_URL = 'https://image.tmdb.org/t/p/w1280';
  // To calculate rating
  let rating = 5 * ((data.vote_average * 10) / 100);
  // Format Date
  let formatData = (date) => {
    if (date) {
      date = date.split('-');
      let month = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      return date[2] + ' ' + month[+date[1] - 1] + ' ' + date[0];
    }
  };
  return (
    <div className="movie-box">
      <img
        src={IMG_URL + data.poster_path}
        alt={data.original_title || data.name}
      />
      <div className="movie-details">
        <div className="name">{data.original_title || data.name}</div>
        {data.media_type ? (
          <div className="details">
            <div className="type" style={{ textTransform: 'uppercase' }}>
              {data.media_type === 'tv'
                ? data.media_type + ' Series'
                : data.media_type}
            </div>
            <div className="date">
              {formatData(data.release_date) || formatData(data.first_air_date)}
            </div>
          </div>
        ) : (
          <div className="details">
            <div className="date">
              {formatData(data.release_date) || formatData(data.first_air_date)}
            </div>
            {!data.media_type && (
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
            )}
          </div>
        )}

        {data.media_type && (
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
        )}
      </div>
    </div>
  );
};

export default MovieBox;
