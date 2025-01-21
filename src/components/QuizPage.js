import React, { useState } from "react";
import QuestionCard from "./QuestionCard";

function QuizPage({ category }) {
  const [questions, setQuestions] = useState(category.questions); // Store shuffled questions
  const [showAnswers, setShowAnswers] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1);
    setShowAnswers(false);
  };

  const shuffleQuestions = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5); // Shuffle the questions
    setQuestions(shuffled);
    setRefreshKey((prev) => prev + 1); // Force re-render
  };

  return (
    <div>
      {/* <button onClick={onBack}>Back to Categories</button> */}
      <h2>Quiz</h2>
      
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setShowAnswers(true)}>Reveal All Answers</button>
        <button onClick={handleRefresh}>Refresh</button>
        <button onClick={shuffleQuestions}>Shuffle Questions</button>
      </div>
      {questions.map((question, index) => (
        <QuestionCard
          key={`${refreshKey}-${index}`}
          question={question}
          questionNumber={index + 1} // Update numbering based on shuffled order
          showAnswers={showAnswers}
        />
      ))}
    </div>
  );
}

export default QuizPage;
