import React, { useState } from 'react';
import QuestionAndAnswers from '../QuestionAndAnswers';
import ScoreComponent from './ScoreComponent';

export default function QuizPage({ quizData }): JSX.Element {
  const [result, setResult] = useState(new Map());
  const [checkAnswers, setCheckAnswers] = useState(false);
  let numberOfCorrectAnswers = 0;
  const checkAnswerClick = () => {
    if ([...result.values()].length === 5) setCheckAnswers(true);
  };

  if (checkAnswers) {
    for (let [ind, truthy] of result) {
      console.log(truthy);
      truthy === true && numberOfCorrectAnswers++;
    }
  }

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
      {!checkAnswers ? (
        <button className='start-btn' onClick={checkAnswerClick}>
          Check your answers!
        </button>
      ) : (
        <ScoreComponent result={numberOfCorrectAnswers} />
      )}
    </div>
  );
}
