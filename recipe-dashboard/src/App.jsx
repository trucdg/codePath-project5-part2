import React from "react";
import FeaturedRecipe from "./component/FeaturedRecipe";
import RecipeTable from "./component/RecipeTable";
import "./App.css";

function App() {
  return (
    <div className="row">
      <div className="col left">
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
      <div className="col right">
        <FeaturedRecipe />
        <div className="break"></div>
        <RecipeTable />
      </div>
    </div>
  );
}

export default App;
