import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip, CardActionArea } from '@material-ui/core';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';


const RecipeCard = ({recipe}) => {
  return (
    <Card>
    <CardActionArea>
      <CardMedia style={{height: 350}} img={recipe.image} title={recipe.title} alt="Recipe Image"/>
      <CardContent>
        <Typography variant='h5'>
          {recipe.title}
        </Typography>
        <Typography variant='body2' color="text.secondary"> 
          {recipe.summary}
        </Typography>
        <Typography variant='body2' color="text.secondary"> 
          <AvTimerIcon /> {recipe.readyInMinutes}
        </Typography>
        <Typography variant='body2' color="text.secondary"> 
         <FavoriteIcon /> {recipe.aggregateLikes}
        </Typography>
        {
          //loop diet array

        }
      </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default RecipeCard;
