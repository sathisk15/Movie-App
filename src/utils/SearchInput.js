import SearchIcon from '@mui/icons-material/Search';
import './utils.css';
const SearchInput = () => {
  return (
    <>
      <div className="search">
        <input type="text" placeholder="Search..." />
        <div className="search-icon">
          <SearchIcon />
        </div>
      </div>
    </>
  );
};

export default SearchInput;
