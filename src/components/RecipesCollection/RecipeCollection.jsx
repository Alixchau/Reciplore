import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import { Grid } from '@material-ui/core';

import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip, CardActionArea } from '@material-ui/core';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

const RecipeCollection = ({recipes}) => {
  return (
    <Grid container spacing={3}>
      {recipes.map((recipe) => (
        <Grid  item xs={12} md={6}>
       {/*   <RecipeCard recipe={recipe} /> */}

       <CardActionArea>
      <CardMedia style={{height: 300}} image={recipe.image} title={recipe.title} alt="Recipe Image"/>
      <CardContent>
        <Typography variant='h5'>
          {recipe.title}
        </Typography>
        {recipe.diets?.map(diet =>(
          <Typography vvariant='body2' color="text.secondary">
         <CheckCircleRoundedIcon /> {diet}
        </Typography>
        )
        )}

        <Typography variant='body2' color="text.secondary"> 

          <AvTimerIcon /> {recipe.readyInMinutes} mins 
        </Typography>
        <Typography variant='body2' color="text.secondary"> 
         <FavoriteIcon /> {recipe.aggregateLikes}
        </Typography>

      </CardContent>
      </CardActionArea>


          
        </Grid>
      ))
      }
    </Grid>
  )
}

export default RecipeCollection;
