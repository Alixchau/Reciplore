import { SettingsRemote } from '@material-ui/icons';
import axios from 'axios';

//Search Recipes by Ingredients
export const getByIngredient = async(ingredients) => {
  try {
    const {data} = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`, {
      params:{ingredients: ingredients},
      headers:{
        "Content-Type": "application/json"
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

//Get Analyzed Recipe Instructions on click of a recipe card
export const getRecipeInstructions = async(id) => {
  try {
    const{data} = await axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`,{
      params:{
        id: id,
      }
    });
//    console.log(data);
    return data;
  } catch (error) {
    console.log(error)
  }
};

//Get Ingredients by ID on click of a recipe card
 export const getIngredientById = async(id) => {
  try {
    const {data} = await axios.get(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`,{
      params:{
        id: id
      }
    });

    //console.log(data);
    return data;
  } catch (error) {
    console.log(error)
  }
};


//Get 4 Random recipes when app mounts
export const getRandomRecipe = async(recipeCount) => {

  try {
    const {data} = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`,{
      params:{
        number: recipeCount,
      }
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error)
  }
};


//Wine pairing
export const getPairedWines = async(food) => {

  try {
    const {data} = await axios.get(`https://api.spoonacular.com/food/wine/pairing?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`,{
      params:{
        food: food,
      }
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error)
  }
};