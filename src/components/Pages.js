import PaginationItem from '@mui/material/PaginationItem';
import Pagination from '@mui/material/Pagination';

import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/redux';
const Pages = () => {
  const { movie } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const previous = () => {
    if (movie.page > 1)
      dispatch(movieAction(movie.screenContent, movie.page - 1));
  };
  const next = () => {
    if (movie.total_pages > movie.page)
      dispatch(movieAction(movie.screenContent, movie.page + 1));
  };
  const page = (e) => {
    dispatch(movieAction(movie.screenContent, +e.target.innerText));
  };

  return (
    <>
      {movie.total_pages >= movie.page && (
        <div className="page-numbers">
          <PaginationItem type="previous" onClick={previous} />
          <Pagination
            count={movie.total_pages}
            page={movie.page}
            color="primary"
            hideNextButton={true}
            hidePrevButton={true}
            onClick={page}
          />
          <PaginationItem type="next" onClick={next} />
        </div>
      )}
    </>
  );
};
export default Pages;
