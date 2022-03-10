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

//Generate Meal Plan
export const getMealPlan = async(timeFrame, targetCalories, diet, exclude) => {
  try {
    const {data} = await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`,{
    params:{
      timeFrame: timeFrame,
      targetCalories: targetCalories,
      diet: diet,
      exclude: exclude,
    }
    });

    return data;
  } catch (error) {
    console.log(error);
  }
}

//Get Analyzed Recipe Instructions
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

//Get 4 Random recipes when app mounts
export const getRandomRecipe = async() => {
  const NUMBER = 4; 
  try {
    const{data} = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`,{
      params:{
        number: NUMBER,
      }
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error)
  }
};