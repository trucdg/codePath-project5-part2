import React, { useState, useEffect } from "react";
import FeaturedRecipe from "./component/FeaturedRecipe";
import RecipeTable from "./component/RecipeTable";
import "./App.css";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const dummyRecipe = {
    title: "No recipe found",
    image: "",
    sourceUrl: "",
    readyInMinutes: "",
  };
  const [recipesList, setRecipesList] = useState(null);
  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=20`
      );
      const json = await response.json();
      setRecipesList(json);
      console.log(json);
    };
    fetchRecipes().catch(console.error);
  }, []);
  return (
    <div className="row">
      <div className="left">
        <h2>
          <i className="fa-solid fa-utensils"></i>RecipesBoard
        </h2>
        <ul>
          <li className="nav-item">
            <i className="fa-solid fa-house"></i>Dashboard
          </li>
          <li className="nav-item">
            <i className="fa-solid fa-magnifying-glass"></i>Search
          </li>
          <li className="nav-item">
            <i className="fa-solid fa-circle-info"></i>About
          </li>
        </ul>
      </div>
      <div className="right">
        <FeaturedRecipe
          recipe={recipesList ? recipesList.results[0] : dummyRecipe}
        />
        {/* <div className="break"></div> */}
        <RecipeTable recipesList={recipesList ? recipesList.results : []} />
      </div>
    </div>
  );
}

export default App;
