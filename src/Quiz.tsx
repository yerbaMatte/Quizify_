import React, { useState } from 'react';
import { useQuery } from 'react-query';
import QuestionsAnswers from './QuestionsAnswers';
import { getQuizData } from './services/getQuizData';
import { formatStrings } from './services/formatStrings';

export default function Quiz(props): JSX.Element {
  let quiz = [];

  const { data, isSuccess } = useQuery('quizData', () =>
    getQuizData(props.data)
  );

  if (isSuccess) {
    quiz = formatStrings(data);
  }

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

  const getNewQuiz = () => {
    props.handleClick();
  };

  const questionAnswersSet = quiz.map((QA, ind) => (
    <QuestionsAnswers
      data={quiz[ind]}
      questionID={ind}
      updateAnswer={updateAnswer}
      result={result}
      key={ind}
    />
  ));

  return isSuccess ? (
    <div className="container row flex-column bg-layout justify-space-around">
      {questionAnswersSet}
      {result.length === 0 ? (
        <button onClick={checkResults} className="start-btn">
          Check your answers!
        </button>
      ) : (
        <div className="btn-container">
          <h2 className="score">Your total score is {result}</h2>
          <button className="check-btn" onClick={getNewQuiz}>
            GET NEW QUIZ
          </button>
        </div>
      )}
    </div>
  ) : (
    <p>Loading...</p>
  );
}
