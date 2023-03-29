import React from "react";
import FeaturedRecipe from "./assets/component/FeaturedRecipe";
import "./App.css";

function App() {
  return (
    <div className="row">
      <div className="col left">
        <h2>
          <i className="fa-solid fa-utensils"></i>RecipesBoard
        </h2>
        <ul>
          <li>
            <i className="fa-solid fa-house"></i>Dashboard
          </li>
          <li>
            <i className="fa-solid fa-magnifying-glass"></i>Search
          </li>
          <li>
            <i className="fa-solid fa-circle-info"></i>About
          </li>
        </ul>
      </div>
      <div className="col right">
        <h1> Featured Recipe </h1>
        <FeaturedRecipe />
      </div>
    </div>
  );
}

export default App;
