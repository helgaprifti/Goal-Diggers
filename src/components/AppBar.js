import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import '../App.css';


export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1, 
      bgcolor:'grey'
            }}>
      <AppBar position="static"
              style={{backgroundColor:'gray'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            // sx={{ flexGrow: 1, display: { justifyContent: 'flex', sm: 'block' } }}
            paddingRight={5}
          >
            <Link to="/">Menu</Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Link to="/AboutUs">About Us</Link>

          </Typography>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            position={''}
          >
            <Link to="/LogIn">Log In</Link>

          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
