import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LiveTvIcon from '@mui/icons-material/LiveTv';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ display: 'flex', marginLeft: '40px' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <LiveTvIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ cursor: 'pointer' }}
          >
            Movie App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
