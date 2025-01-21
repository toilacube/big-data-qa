import React, { useState, useEffect } from "react";
import CategorySelector from "./components/CategorySelector";
import QuizPage from "./components/QuizPage";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [key, setKey] = useState(0);
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <div>
        <div>
          <CategorySelector onSelectCategory={handleCategoryChange} />
        </div>
        <div>
          {selectedCategory && (
            <QuizPage key={key} category={selectedCategory} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
