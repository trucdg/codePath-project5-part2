import React from "react";
import TableRow from "./TableRow";
const RecipeTable = () => {
  let headings = ["Name", "Vegetarian", "Ready In Minutes", "Link"];
  let body = [
    ["dsasa", "true", "45", "dsadsa"],
    ["dsa", "dsa", "95", "dsa"],
  ];
  return (
    <div className="dashboard">
      <h2> Recipes Dashboard</h2>
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
