import React, { useState } from "react";
import TableRow from "./TableRow";
const RecipeTable = ({ recipesList }) => {
  const [cookTime, setCookTime] = useState("");
  const [filteredList, setFilteredList] = useState(recipesList);

  const changeCookTime = (event) => {
    setCookTime(event.target.value);
  };
  let headings = ["Name", "Vegan", "Dairy-Free", "Ready In Minutes", "Cuisine"];

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cookTime !== "") {
      const filteredData = recipesList.filter((recipe) => {
        return recipe.readyInMinutes < cookTime;
      });

      setFilteredList(filteredData);
    } else {
      setFilteredList(recipesList);
    }
  };

  let body = filteredList.map((recipe) => {
    return [
      recipe.title,
      recipe.vegetarian ? "true" : "false",
      recipe.dairyFree ? "true" : "false",
      recipe.readyInMinutes,
      recipe.cuisines,
    ];
  });

  return (
    <div className="dashboard">
      <h2> Recipes Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <label for="time">Cook time (between 10 and 200):</label>
          <br />
          <input
            type="range"
            id="time"
            name="time"
            min="0"
            max="200"
            value={cookTime}
            onChange={changeCookTime}
          />
          <p>Cooking Time = {cookTime ? cookTime : "(Not specified)"} mins</p>
          <button type="submit"> Submit</button>
        </label>
      </form>
      <table>
        <thead>
          <tr>
            {headings.map((heading, headID) => {
              return <th key={headID}>{heading}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {body.map((rowContent, rowID) => (
            <TableRow key={rowID} rowContent={rowContent} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecipeTable;
