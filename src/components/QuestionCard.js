import React, { useState } from "react";
import classNames from "classnames";
import "./QuestionCard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function QuestionCard({ question, questionNumber, showAnswers }) {
  const [selectedOption, setSelectedOption] = useState(null);
  
  const handleOptionClick = (option) => {
    if (!selectedOption) {
      setSelectedOption(option);
      if (option !== question.answer) {
        // toast.error("Quá Ngu");
      }
    }
  };

  return (
    <div className="question-card">
      <h3>
        {questionNumber}. {question.question} {/* Add question number */}
      </h3>
      <ToastContainer position="top-center" autoClose={500}/>
      <ul>
        {question.options.map((option, index) => (
          <li
            key={index}
            className={classNames("option", {
              "highlight-correct":
                selectedOption &&
                ((selectedOption !== question.answer &&
                  option === question.answer) || // Highlight correct in yellow if user is wrong
                  (selectedOption === option && option === question.answer)), // Highlight correct in yellow if user is right
              incorrect:
                selectedOption === option && option !== question.answer, // Highlight red if incorrect
              correct: showAnswers && option === question.answer, // Highlight green for correct answers on reveal
            })}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionCard;

// function QuestionCard({ question, questionNumber, showAnswers }) {
//     const [selectedOption, setSelectedOption] = useState(null);

//     return (
//         <div className="question-card">
//             <h3>
//                 {questionNumber}. {question.question} {/* Add question number */}
//             </h3>
//             <ul>
//                 {question.options.map((option, index) => (
//                     <li
//                         key={index}
//                         className={classNames("option", {
//                             "highlight-correct":
//                                 selectedOption &&
//                                 ((selectedOption !== question.answer && option === question.answer) || // Highlight correct in yellow if user is wrong
//                                     (selectedOption === option && option === question.answer)), // Highlight correct in yellow if user is right
//                             incorrect:
//                                 selectedOption === option && option !== question.answer, // Highlight red if incorrect
//                             correct: showAnswers && option === question.answer, // Highlight green for correct answers on reveal
//                         })}
//                         onClick={() => handleOptionClick(option)}
//                     >
//                         {option}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default QuestionCard;
