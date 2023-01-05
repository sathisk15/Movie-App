import SearchIcon from '@mui/icons-material/Search';
import './utils.css';
const SearchInput = () => {
  return (
    <>
      <div className="search">
        <SearchIcon />
        <input type="text" placeholder="Search..." />
      </div>
    </>
  );
};

export default SearchInput;
