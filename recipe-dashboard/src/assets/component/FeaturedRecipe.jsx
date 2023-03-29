import React from "react";

const FeaturedRecipe = () => {
  const recipe = ["name", "image", "diet"];
  return (
    <div>
      <h2>Featured Recipe</h2>
      <ul className="d-flex">
        <li className="card">
          <h4>Name</h4>
          <p>recipe name</p>
        </li>
        <li className="card">
          <h4>Diet types</h4>
          <p>healthy</p>
        </li>
        <li className="card">
          <h4>vegan</h4>
        </li>
      </ul>
    </div>
  );
};

export default FeaturedRecipe;
