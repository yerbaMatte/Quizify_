import React, { useState } from 'react';
import QuestionAndAnswers from './QuestionAndAnswers';

export default function QuizPage({ quizData }): JSX.Element {
  const [result, setResult] = useState(new Map());
  const [checkAnswers, setCheckAnswers] = useState(false);

  const checkAnswerClick = () => {
    if ([...result.values()].length === 5) setCheckAnswers(true);
  };

  console.log();

  return (
    <div className='container row flex-column bg-layout justify-space-around'>
      {quizData.map((_, ind) => (
        <QuestionAndAnswers
          data={quizData[ind]}
          key={ind}
          id={ind}
          setResult={setResult}
          checkAnswers={checkAnswers}
        />
      ))}
      {
        <button className='start-btn' onClick={checkAnswerClick}>
          Check your answers!
        </button>
      }
    </div>
  );
}
