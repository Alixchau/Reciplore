import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {getRandomRecipe } from './api/ApiCalls';
import { CssBaseline } from '@material-ui/core';
import RecipeCollection from './components/RecipesCollection/RecipeCollection';
import RecipeInstruction from './components/RecipeInstruction/RecipeInstruction.jsx';
import PairedWines from './components/PairedWines/PairedWines';
import Home from './components/Home/Home';
import './main_styles.css';
import NotFound from './components/NotFound/NotFound';


const App = () => {
  const RECIPE_COUNT = 4; //Get 4 Random recipes when App mounts
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
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
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
