import React, {useEffect} from 'react';
import Header from './components/Header/Header';
import RecipeCard from './components/RecipeCard/RecipeCard';
import { getByIngredient, getMealPlan, getRecipeInstructions, getRandomRecipe } from './api/ApiCalls';
import { CssBaseline, Grid } from '@material-ui/core';

const App = () => {
  
  useEffect(()=>{
    //getMealPlan("day", 2000,"vegetarian","shellfish")
    //getRecipeInstructions(324694);
   // getRandomRecipe();
  },[]);

  return (

    <div>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} >
        <Grid item xs={12} md={4}>

        </Grid>

        <Grid item xs={12} md={8}>

        </Grid>
      </Grid>
    </div>
  )
}

export default App;
