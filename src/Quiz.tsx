import React, { useState } from 'react';
import { useQuery } from 'react-query';
import QuestionsAnswers from './QuestionsAnswers';
import { formatData, fetchAxios } from './helperFunctions/helperFunctions';

export default function Quiz(props): JSX.Element {
  let quiz = [];
  const [restartApp, setRestartApp] = useState(false);

  const { data, isSuccess } = useQuery('quizData', () =>
    fetchAxios(props.data)
  );

  if (isSuccess) {
    quiz = formatData(data);
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
    setRestartApp((prev) => !prev);
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
    <div className="container">
      {questionAnswersSet}
      {result.length === 0 ? (
        <button onClick={checkResults} className="check-btn">
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
