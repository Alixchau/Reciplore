import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, InputBase } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, CssBaseline } from '@mui/material';
import './header-styles.css';


const Header = () => {
  return (
    <div className='navbar'>
    <div className='navContainer'>
      <div className='navLogo'>Reciplore</div>
      <div className='links'>
        <Link color="inherit" to="/explore">Explore Random Recipes</Link>
        <Link color="inherit" to="/pairedwines">Wine Pairing</Link>
      </div>
      </div>
    </div>
  )
}

export default Header
