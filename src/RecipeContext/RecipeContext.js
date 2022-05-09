import React, { createContext, useState } from 'react'

//set recipeDetail from RecipeCollection's recipe onClick and pass it to RecipeInstruction page
export const RecipeContext = createContext({
  recipeDetail: null,
  setRecipeDetail: () => null,
});

export function RecipeProvider({ children }) {
  const [recipeDetail, setRecipeDetail] = useState(null);
  const value = {recipeDetail, setRecipeDetail};
  return (
    <RecipeContext.Provider value={value}>
      {children}
    </RecipeContext.Provider>
  )
}
