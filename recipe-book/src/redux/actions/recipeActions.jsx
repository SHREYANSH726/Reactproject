// Redux action types
export const SET_RECIPES = "SET_RECIPES"
export const ADD_RECIPE = "ADD_RECIPE"
export const UPDATE_RECIPE = "UPDATE_RECIPE"
export const DELETE_RECIPE = "DELETE_RECIPE"

// Action creators
export const setRecipes = (recipes) => ({
  type: SET_RECIPES,
  payload: recipes,
})

export const addRecipe = (recipe) => ({
  type: ADD_RECIPE,
  payload: recipe,
})

export const updateRecipe = (recipe) => ({
  type: UPDATE_RECIPE,
  payload: recipe,
})

export const deleteRecipe = (id) => ({
  type: DELETE_RECIPE,
  payload: id,
})
