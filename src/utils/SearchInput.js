import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { movieAction } from '../redux/redux';
import './utils.css';
const SearchInput = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();
  let URL = `https://api.themoviedb.org/3/search/multi?api_key=20c575bf9f44538421f08161da824a42&language=en-US&query=${value}&page=`;
  const search = () => {
    if (value) dispatch(movieAction(URL));
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          value={value}
          required
          placeholder="Search..."
          onChange={(e) => {
            setValue(() => e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') search();
          }}
        />
        <div className="search-icon" onClick={search}>
          <SearchIcon />
        </div>
      </div>
    </>
  );
};

export default SearchInput;
