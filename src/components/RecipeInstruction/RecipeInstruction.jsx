import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { getRecipeInstructions, getIngredientById } from '../../api/ApiCalls.js';
import { CardMedia, Grid, Paper, Typography } from '@material-ui/core';
import Header from '../Header/Header.jsx';
import {RecipeContext} from '../../RecipeContext/RecipeContext';

const RecipeInstruction = () => {
  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const { recipeId } = useParams();
  const imageURLPrefix = "https://spoonacular.com/cdn/ingredients_100x100/";
  const recipe = useContext(RecipeContext);
  console.log(recipe);
  useEffect(() => {
    getRecipeInstructions(recipeId)
      .then(data => {
        setInstructions(data[0].steps);
        console.log(data[0].steps)
      });
  }, []);

  useEffect(() => {
    getIngredientById(recipeId)
      .then(data => {
        setIngredients(data.ingredients);
        console.log(data.ingredients);
      }
      )
  }, []);


  return (
    <div className='instructionContainer'>
    <Header />
      <Grid container spacing={2} >
        <Typography variant='h5'>Ingredients</Typography>
        
      {
          ingredients.map(ingredient =>(
            <Grid container display="flex" justifyContent='space-between'> 
            <img src={`${imageURLPrefix}${ingredient.image}`} alt="ingredients" />  <Grid item xs={12}>{ingredient.name} </Grid>
            <Grid item xs={12}>{ingredient.amount.metric.value} {ingredient.amount.metric.unit} </Grid>
            </Grid>
          ))
        } *
      </Grid>
      <Grid container spacing={2}>
        <Typography variant='h5'>Recipe Instructions</Typography>
        {
          instructions.map(instruction => (
            <Grid>
              <Typography variant="h5" key={instruction.number}>
                Step {instruction.number}
              </Typography>

              <Grid item fullWidth key={instruction.number}>
                {instruction.step}
              </Grid>

            </Grid>
          ))
        }

      </Grid>
    </div>
  )
}

export default RecipeInstruction;
