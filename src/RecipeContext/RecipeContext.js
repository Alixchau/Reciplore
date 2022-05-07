import React, { createContext, useState, useContext } from 'react'


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
