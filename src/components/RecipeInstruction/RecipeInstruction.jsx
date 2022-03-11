import { CardMedia, Grid, Paper, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { getRecipeInstructions } from '../../api/ApiCalls.js';


const RecipeInstruction = ({ id }) => {
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    getRecipeInstructions(id)
      .then(data => {
        setInstructions(data[0].steps);
        console.log(data)
      });
  }, []);

  return (
    <Paper>
      <Grid container spacing={2}>
        {
          instructions.map(instruction => (
            <Grid>
              <Typography variant="h5" key={instruction.number}>
                Step {instruction.number}
              </Typography>
              {
                instruction.ingredients?.map((ingredient, index) => (
                  <Typography variant='body3' key={index}><CardMedia src={ingredient.image} key={index} />{ingredient.name}</Typography>
                ))
              }
              <Grid item fullWidth key={instruction.number}>
                {instruction.step}
              </Grid>

            </Grid>
          ))
        }

      </Grid>
    </Paper>
  )
}

export default RecipeInstruction;
