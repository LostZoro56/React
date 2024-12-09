import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "what language is react based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "what are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "what is the name of the syntax we use to describe a UI in React",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "how to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give compnents memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "what do we call an input element that is completely synchornised?",
    answer: "controlled element",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    //here we need id of question that should become selected question
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          // here we need function not a function call
          //onClick={handleClick(question.id)}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
