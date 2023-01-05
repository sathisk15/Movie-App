import React from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';
const MovieBox = () => {
  return (
    <div className="movie-box">
      <img
        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQnEi3TKfHxsAvT04Paw-a3rYUjRs19be4xI-Y2uI5DbLz-rft4"
        alt="Spyderman"
      />
      <div className="movie-details">
        <div className="name">Spyder-Man</div>
        <div className="details">
          <div className="type">Movie</div>
          <div className="date">12/10/2023</div>
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
