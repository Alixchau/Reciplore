import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, InputBase } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, CssBaseline } from '@mui/material';



const Header = () => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Reciplore
          </Typography>
          <Box display="flex">
            <Link color="inherit" to="/">Explore Random Recipes</Link>
            <Link color="inherit" to="/pairedwines">Wine Pairing</Link>
          </Box>

        </Toolbar>
      </AppBar>


    </div>
  )
}

export default Header
