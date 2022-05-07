import React, { createContext, useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import { getByIngredient, getMealPlan, getRecipeInstructions, getRandomRecipe } from './api/ApiCalls';
import { CssBaseline, Grid } from '@material-ui/core';
import RecipeCollection from './components/RecipesCollection/RecipeCollection';
import RecipeInstruction from './components/RecipeInstruction/RecipeInstruction.jsx';
import PairedWines from './components/PairedWines/PairedWines';
import Home from './components/Home/Home';
import './main_styles.css';
import { RecipeContext, RecipeProvider } from './RecipeContext/RecipeContext';

const App = () => {
  const RECIPE_COUNT = 4; //Get 4 Random recipes when App mounts
  const [recipes, setRecipes] = useState([]);
  const { recipeDetail, setRecipeDetail } = useContext(RecipeContext);

  useEffect(() => {
    //getMealPlan("day", 2000,"vegetarian","shellfish")
    //getRecipeInstructions(324694);

    getRandomRecipe(RECIPE_COUNT)
      .then(data => {
        setRecipes(data.recipes)

      });
  }, []);

  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/recipe" element={<RecipeCollection recipes={recipes} />} />
          <Route path={"/recipe/recipeDetail/:recipeId"} element={<RecipeInstruction />} />
          <Route path={"/pairedwines"} element={<PairedWines />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
