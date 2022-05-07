import React, {createContext, useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';
import { Grid } from '@material-ui/core';

import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip, CardActionArea } from '@material-ui/core';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CancelIcon from '@mui/icons-material/Cancel';

import RecipeInstruction from '../RecipeInstruction/RecipeInstruction';
import Header from '../Header/Header';
import './RecipeCollection_styles.css';
import '../../main_styles.css';
import {RecipeContext} from '../../RecipeContext/RecipeContext';


const RecipeCollection = ({ recipes }) => {
  const navigate = useNavigate();
  const { recipeDetail, setRecipeDetail } = useContext(RecipeContext);

  return (
    <div className='collectionContainer'>
      <Header />
      <Grid container spacing={3} >

        {recipes.map((recipe) => (

          <Grid item xs={12} md={6}>
            {/*   <RecipeCard recipe={recipe} /> */}
            <Card elevation={6}>
              <CardActionArea onClick={() => {
                setRecipeDetail(recipe);
                navigate(`recipeDetail/${recipe.id}`)}}>
                <CardMedia style={{ height: 300 }} image={recipe.image} title={recipe.title} alt="Recipe Image" key={recipe.id} />
                <CardContent>
                  <h4 key={recipe.id} style={{marginBottom: "7px"}}>
                    {recipe.title}
                  </h4>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    {
                      recipe.dairyFree ?
                        <CheckCircleRoundedIcon color="action" /> :
                        <CancelIcon color="action" />
                    }
                    <p style={{padding: "2px 10px"}}> Dairy Free</p>
                  </div>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    {
                      recipe.vegetarian ?
                        <CheckCircleRoundedIcon color="action" /> :
                        <CancelIcon color="action" />
                    }
                    <p style={{padding: "2px 10px"}}> Vegetarian</p>
                  </div>
                  {/*                   <div style={{ display: "flex", alignItems: "center" }}>
                    {recipe.diets?.map((diet, index) => (
                      <p color="text.secondary" key={index}>
                        <CheckCircleRoundedIcon color="action" /> {diet}
                      </p>
                    ))}
                  </div> */}

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <AvTimerIcon color="action" />
                    <p color="action" key={recipe.id}  style={{padding: "2px 10px"}}>
                      {recipe.readyInMinutes} mins
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FavoriteIcon color="action" />
                    <p key={recipe.id} style={{padding: "2px 10px"}}>
                      {recipe.aggregateLikes} likes
                    </p>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))
        }
      </Grid>
    </div>

  )
}

export default RecipeCollection;
