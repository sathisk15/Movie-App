import './components.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TheatersIcon from '@mui/icons-material/Theaters';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { movieAction } from '../redux/redux';

const BottomNav = () => {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();

  return (
    <Box className="bottom-nav">
      <BottomNavigation
        className="nav"
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          onClick={() => dispatch(movieAction('trending'))}
          label="Trending"
          icon={<WhatshotIcon />}
        />
        <BottomNavigationAction
          onClick={() => dispatch(movieAction('popular'))}
          label="Movies"
          icon={<MovieIcon />}
        />
        <BottomNavigationAction
          onClick={() => dispatch(movieAction('tv'))}
          label="TV Series"
          icon={<TheatersIcon />}
        />
        <BottomNavigationAction
          onClick={() => dispatch(movieAction('search'))}
          label="Search"
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default BottomNav;
