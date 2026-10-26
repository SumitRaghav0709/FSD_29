import { useState } from "react";
import questions from "../public/questions.json";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const checkAnswer = (option) => {
    const isCorrect = option === questions[currentIndex].correct_answer;
    const newScore = score + (isCorrect ? 1 : 0);

    if (isCorrect) {
      setScore(newScore);
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((index) => index + 1);
    } else {
      alert(`Your score is ${newScore} out of ${questions.length}`);
    }
  };

  const currentQuestion = questions[currentIndex];

  const prevhandler=()=>{
    setCurrentIndex((currentIndex-1+questions.length)%questions.length);
  }

  const nexthandler = () => {
    setCurrentIndex((currentIndex + 1) % questions.length);
  };

  

  return (
    <div>
      <h1>Quiz App</h1>
      <p>
        Question {currentIndex + 1} of {questions.length}
      </p>
      <p>{currentQuestion.question}</p>
      <div className="options">
        {currentQuestion.options.map((option, index) => (
          <button key={index} onClick={() => checkAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
      <div className="navigation">
        <button onClick={prevhandler}>Previous</button>
        <button onClick={nexthandler}>Next</button>
      </div>
    </div>
  );
};

export default App;
