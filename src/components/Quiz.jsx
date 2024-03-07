import { useState } from 'react';
import QUESTIONS from '../questions';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  function handleAnsSelect(selectedAnswer) {
    setUserAnswers((prevUserAns) => {
      return [...prevUserAns, selectedAnswer];
    });
  }

  return (
    <div id='question'>
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <ul id='answers'>
        {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
          <li className='answer' key={answer}>
            <button onClick={() => handleAnsSelect(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
