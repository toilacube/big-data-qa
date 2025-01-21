import React from "react";
import category1 from "../data/map-reduce.json";
import spark from "../data/spark.json";
// import category2 from "../data/category2.json";

const categories = [
  { name: "Map-Reduce", data: category1 },
  { name: "Spark", data: spark },
];

function CategorySelector({ onSelectCategory }) {
  return (
    <div>
      <h2>Select a Category</h2>
      {categories.map((category, index) => (
        <button key={index} onClick={() => onSelectCategory(category.data)}>
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default CategorySelector;
