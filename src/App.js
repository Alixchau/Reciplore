import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import { getByIngredient, getMealPlan, getRecipeInstructions, getRandomRecipe } from './api/ApiCalls';
import { CssBaseline, Grid } from '@material-ui/core';
import RecipeCollection from './components/RecipesCollection/RecipeCollection';

const App = () => {
  const RECIPE_COUNT = 4; //Get 4 Random recipes when App mounts
  const [recipes, setRecipes] = useState([]);
 
  useEffect(() => {
    //getMealPlan("day", 2000,"vegetarian","shellfish")
    //getRecipeInstructions(324694);


    getRandomRecipe(RECIPE_COUNT)
      .then(data => {
        setRecipes(data.recipes)

      });
  }, []);

  return (

    <div>
      <CssBaseline />
      <Header />

      <RecipeCollection 
        recipes={recipes}
      /> 

    </div>
  )
}

export default App;
