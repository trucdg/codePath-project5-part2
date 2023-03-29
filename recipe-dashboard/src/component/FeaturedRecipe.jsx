import React from "react";

const FeaturedRecipe = ({ recipe }) => {
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
          {recipe.image != "" ? (
            <img src={recipe.image} className="featured-img" />
          ) : (
            <p>Oops! No image found</p>
          )}
        </li>
        <li className="card">
          <h4>Diet types</h4>
          <ul>
            {recipe.diets &&
              recipe.diets.map((diet, dietKey) => (
                <li key={dietKey}>{diet}</li>
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
