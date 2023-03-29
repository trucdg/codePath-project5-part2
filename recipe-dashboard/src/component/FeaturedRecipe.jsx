import React from "react";

const FeaturedRecipe = ({ recipe }) => {
  console.log(recipe);
  console.log(recipe.title);
  console.log(recipe.image);
  const recipes = ["name", "image", "diet"];
  return (
    <div className="featured-cont">
      <h2>Featured Recipe</h2>
      <ul className="d-flex">
        <li className="card">
          <h4>Recipe Name</h4>
          <p>
            <a href="recipe.sourceUrl">{recipe.title}</a>
          </p>
        </li>
        <li className="card">
          <h4>Image</h4>
          <img src={recipe.image} className="featured-img" />
        </li>
        <li className="card">
          <h4>Diet types</h4>
          <ul>
            {recipe.diets.map((diet) => (
              <li>{diet}</li>
            ))}
          </ul>
        </li>
        <li className="card">
          <h4>Ready In</h4>
          <h3>{recipe.readyInMinutes} minutes</h3>
        </li>
      </ul>
    </div>
  );
};

export default FeaturedRecipe;
