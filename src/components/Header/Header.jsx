import { AppBar, Toolbar, Typography, Button, Box, InputBase } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, CssBaseline } from '@mui/material';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';

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
            <Button color="inherit" >Meal Plan</Button>
            <Button color="inherit">Recipe</Button>
            <Button color="inherit">Meal Type</Button>
            <Button color="inherit">Diet Type</Button>
          </Box>

        </Toolbar>
      </AppBar>

      <Box display="flex">
        <Typography variant='h6'>Explore Recipes of your taste</Typography>
        <div >
              <div>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" />
            </div>
      </Box>
    </div>
  )
}

export default Header
