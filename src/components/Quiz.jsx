import { useState } from 'react';
import QUESTIONS from '../questions';
import QuizTimer from './QuizTimer';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

  function handleAnsSelect(selectedAnswer) {
    setUserAnswers((prevUserAns) => {
      return [...prevUserAns, selectedAnswer];
    });
  }

  if (isQuizComplete) {
    return (
      <div>
        <h1>Summary Page</h1>
        <p>Quiz Summary</p>
      </div>
    );
  }

  const shuffledOptions = QUESTIONS[activeQuestionIndex].answers.sort(
    () => Math.random() - 0.5
  );

  return (
    <div id='quiz'>
      <div id='question'>
        <QuizTimer
          timeout={10000}
          onTimeout={() => {
            handleAnsSelect(null);
          }}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id='answers'>
          {shuffledOptions.map((answer) => (
            <li className='answer' key={answer}>
              <button onClick={() => handleAnsSelect(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

//add key for quiztimer to remout
