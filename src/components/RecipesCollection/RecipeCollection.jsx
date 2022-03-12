import React from 'react';
import { useNavigate } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';
import { Grid } from '@material-ui/core';

import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip, CardActionArea } from '@material-ui/core';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

import RecipeInstruction from '../RecipeInstruction/RecipeInstruction';

const RecipeCollection = ({recipes}) => {
  const navigate = useNavigate();

  return (
    <Grid container spacing={3}>
      {recipes.map((recipe) => (
        <Grid  item xs={12} md={6}>
       {/*   <RecipeCard recipe={recipe} /> */}
       <Card elevation={6}>
       <CardActionArea onClick={() => navigate(`recipe/${recipe.id}`)}>
       
      <CardMedia style={{height: 300}} image={recipe.image} title={recipe.title} alt="Recipe Image" key={recipe.id}/>
      <CardContent>
        <Typography variant='h5' key={recipe.id}>
          {recipe.title}
        </Typography>
     
        {recipe.diets?.map((diet,index) =>(
          <Typography vvariant='body2' color="text.secondary" key={index}> 
         <CheckCircleRoundedIcon /> {diet}
        </Typography>
        )
        )}

        <Typography variant='body2' color="secondary" key={recipe.id}> 
          <AvTimerIcon /> {recipe.readyInMinutes} mins 
        </Typography>
        <Typography variant='body2' key={recipe.id}> 
         <FavoriteIcon  color="secondary"/> {recipe.aggregateLikes} likes
        </Typography>

      </CardContent>
      
      </CardActionArea>
      </Card>


          
        </Grid>
      ))
      }
    </Grid>
  )
}

export default RecipeCollection;
