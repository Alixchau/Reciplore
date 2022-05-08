import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeInstructions, getIngredientById } from '../../api/ApiCalls.js';
import Header from '../Header/Header.jsx';
import { RecipeContext } from '../../RecipeContext/RecipeContext';
import NULLPICTURE from "../../img/NULL.png";
import './RecipInstruction_styles.css';

const RecipeInstruction = () => {
  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const { recipeId } = useParams();
  const imageURLPrefix = "https://spoonacular.com/cdn/ingredients_100x100/";
  const { recipeDetail } = useContext(RecipeContext);
  const NULLPICTUREURL = "https://spoonacular.com/cdn/ingredients_100x100/null";

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
    <div className='collectionContainer'>
      <Header />
      <h1 className='recipe_title'>{recipeDetail.title}</h1>
      <div className='img_div' ><img src={recipeDetail.image} /></div>
      <div className='instruction_container'>
        <h3 className='instruction_title'>Ingredients</h3>

        {
          ingredients.map(ingredient => (
            <div className='ingredient_detail'>
            <div className='img_title'>
              <img src={`${imageURLPrefix}${ingredient.image}` === NULLPICTUREURL ? NULLPICTURE : `${imageURLPrefix}${ingredient.image}`} alt="ingredients"  key={ingredient.id} />  
              <div className='ingredient_name'>{ingredient.name} </div>
              </div>
              <div className='ingredient_metric' key={ingredient.id}>{ingredient.amount.metric.value} {ingredient.amount.metric.unit} </div>
            </div>
          ))
        }
      </div>

      <div className='instruction_container' >
        <h3 className='instruction_title'>Recipe Instructions</h3>
        {
          instructions.map(instruction => (
            <div >
              <p className='step_number' key={instruction.number}>
                Step {instruction.number}
              </p>
              <div className='instruction_detail' key={instruction.number}>
                {instruction.step}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default RecipeInstruction;
