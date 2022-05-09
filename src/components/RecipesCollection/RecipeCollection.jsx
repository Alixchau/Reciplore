import React, { useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { Card, CardMedia, CardContent,  CardActionArea } from '@material-ui/core';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CancelIcon from '@mui/icons-material/Cancel';
import Header from '../Header/Header';
import {RecipeContext} from '../../RecipeContext/RecipeContext';
import './RecipeCollection_styles.css';


const RecipeCollection = ({ recipes }) => {
  const navigate = useNavigate();
  const { setRecipeDetail } = useContext(RecipeContext); 

  return (
    <div className='collectionContainer'>
      <Header />
      <div className='collection_inner'>
      <Grid container spacing={5}>
        {recipes.map((recipe) => ( //map the recipes into cards
          <Grid item xs={12} md={6}>
            <Card elevation={6}>
              <CardActionArea onClick={() => { //set and store recipe detail into RecipeContext navigate to recipedetail page 
                setRecipeDetail(recipe);
                navigate(`recipeDetail/${recipe.id}`)}}>
                <CardMedia className='card_img' image={recipe.image} title={recipe.title} alt="Recipe Image" key={recipe.id} />
                <CardContent>
                  <h4 key={recipe.id} className="recipe_name">
                    {recipe.title}
                  </h4>

                  <div className='recipe_tags'>
                    {
                      recipe.dairyFree ?
                        <CheckCircleRoundedIcon color="action" /> :
                        <CancelIcon color="action" />
                    }
                    <p> Dairy Free</p>
                  </div>

                  <div className='recipe_tags'>
                    {
                      recipe.vegetarian ?
                        <CheckCircleRoundedIcon color="action" /> :
                        <CancelIcon color="action" />
                    }
                    <p > Vegetarian</p>
                  </div>

                  <div className='recipe_tags'>
                    <AvTimerIcon color="action" />
                    <p color="action" key={recipe.id}>
                      {recipe.readyInMinutes} mins
                    </p>
                  </div>

                  <div className='recipe_tags'>
                    <FavoriteIcon color="action" />
                    <p key={recipe.id}>
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
    </div>

  )
}

export default RecipeCollection;
