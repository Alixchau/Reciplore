import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { getRecipeInstructions, getIngredientById } from '../../api/ApiCalls.js';
import { CardMedia, Grid, Paper, Typography } from '@material-ui/core';
import Header from '../Header/Header.jsx';
import { RecipeContext } from '../../RecipeContext/RecipeContext';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import { margin } from '@mui/system';

const RecipeInstruction = () => {
  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const { recipeId } = useParams();
  const imageURLPrefix = "https://spoonacular.com/cdn/ingredients_100x100/";
  const {recipeDetail} = useContext(RecipeContext);
  console.log(recipeDetail);

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
      <div style={{ display: "flex", alignItems: "center", justifyContent:"space-around"}}>
        <AvTimerIcon color="action" style={{ display: "flex", alignItems: "end" }}/>
        <div style={{ display: "flex", flexDirection: "column", alignItem:"start" }}>
        <p>READY TIME</p>
        <p color="action" key={recipeDetail.id} style={{ padding: "2px 10px" }}>
          {recipeDetail.readyInMinutes} mins
        </p>
        </div>
      </div>
      <h1>{recipeDetail.title}</h1>
      <div style={{ height: "30%vh", display: "flex", alignItems: "center", justifyContent:"center"}}><img style={{borderRadius:"15px"}}src={recipeDetail.image} /></div>
      <div container spacing={2} >
        <h3>Ingredients</h3>

        {
          ingredients.map(ingredient => (
            <div style={{backgroundColor:"white",display: "flex", justifyContent: 'space-between',borderRadius:"15px",  boxShadow: "0 3px 5px rgba(0,0,0,0.6)", margin:"10px 30px", padding:"10px 15px"  }}>
              <img src={`${imageURLPrefix}${ingredient.image}`} alt="ingredients"  style={{marginLeft: "1rem", height: "70x"}}/>  <div style={{marginLeft: "4rem"}}>{ingredient.name} </div>
              <div  style={{marginRight: "1rem"}}>{ingredient.amount.metric.value} {ingredient.amount.metric.unit} </div>
            </div>
          ))
        } 
      </div>
      <Grid container spacing={2}>
        <h2>Recipe Instructions</h2>
        {
          instructions.map(instruction => (
            <Grid>
              <h3 key={instruction.number}>
                Step {instruction.number}
              </h3>

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
