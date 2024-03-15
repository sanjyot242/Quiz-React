import { useEffect, useState } from 'react';

export default function QuizTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('Set Timeout');
    setTimeout(() => {
      onTimeout();
    }, timeout);
  }, [onTimeout, timeout]);

  useEffect(() => {
    console.log('Set interval');
    setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);
  }, []);
  //add cleanup functions
  return (
    <progress id='question-time' max={timeout} value={remainingTime}></progress>
  );
}
