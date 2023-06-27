import React, { useState } from 'react';
import QuestionsAnswers from './QuestionsAnswers';
import { formatStrings } from '../services/formatStrings';
import { decodeJsonEntities } from '../services/decodeData';

export default function QuizPage({ data }): JSX.Element {
  let quiz = [];

  quiz = formatStrings(decodeJsonEntities(data.results));
  console.log(quiz);

  const answers = {};
  const [result, setResult] = useState('');

  const updateAnswer = (questionId, answer) => {
    answers[questionId] = answer;
  };

  function checkResults() {
    let numberOfTrue = Object.values(answers).filter((x) => x === true).length;

    if (Object.keys(answers).length === 5) {
      setResult(`${numberOfTrue}/5 correct answers`);
    } else {
      console.log('Select all answers');
    }
  }

  const questionAnswersSet = quiz.map((_, ind) => (
    <QuestionsAnswers
      data={quiz[ind]}
      questionID={ind}
      updateAnswer={updateAnswer}
      result={result}
      key={ind}
    />
  ));

  return (
    <div className='container row flex-column bg-layout justify-space-around'>
      {questionAnswersSet}
      {result.length === 0 ? (
        <button onClick={checkResults} className='start-btn'>
          Check your answers!
        </button>
      ) : (
        <div className='btn-container'>
          <h2 className='score'>Your total score is {result}</h2>
          <button className='check-btn'>GET NEW QUIZ</button>
        </div>
      )}
    </div>
  );
}
