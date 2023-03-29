import React, { useState } from "react";
import TableRow from "./TableRow";
const RecipeTable = ({ recipesList }) => {
  const [cookTime, setCookTime] = useState("");
  const [filteredList, setFilteredList] = useState(recipesList);
  const [vegan, setVegan] = useState("");

  const changeCookTime = (event) => {
    setCookTime(event.target.value);
  };
  let headings = ["Name", "Vegan", "Dairy-Free", "Ready In Minutes", "Cuisine"];

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cookTime !== "" && vegan !== "") {
      const filteredData = recipesList.filter((recipe) => {
        return (
          recipe.readyInMinutes < cookTime && recipe.vegan.toString() == vegan
        );
      });
      setFilteredList(filteredData);
    } else {
      setFilteredList(recipesList);
    }
  };

  const changeVeganHandler = (event) => {
    setVegan(event.target.value);
  };

  let body = filteredList.map((recipe) => {
    return [
      recipe.title,
      recipe.vegan ? "true" : "false",
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
          <label>Vegan</label>
          <input type="text" value={vegan} onChange={changeVeganHandler} />
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
