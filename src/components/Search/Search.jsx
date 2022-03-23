import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Typography, Box, InputBase } from '@material-ui/core';
import { getByIngredient, getMealPlan, getRecipeInstructions, getRandomRecipe } from './api/ApiCalls'

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: "",
    };
  }


  render() {
    return (
      <div>
        <Box display="flex">
          <Typography variant='h6'>Explore Recipes of your taste</Typography>
          <div >
            <div>
              <SearchIcon />
            </div>
            <InputBase placeholder="Search…" name="ingredients" value={this.state.ingredients} onSubmit={(ingredients) =>  getByIngredient(ingredients)} />
          </div>
        </Box>


      </div>
    )
  }
}

export default Search;
