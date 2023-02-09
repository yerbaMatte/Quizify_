import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import QuestionsAnswers from './QuestionsAnswers';
import { formatData } from './helperFunctions/formatData';

export default function Quiz(props) {
  const [quiz, setQuiz] = useState([]);
  const [isQuizLoaded, setIsQuizLoaded] = useState(false);
  const [restartApp, setRestartApp] = useState(false);

  useEffect(
    function () {
      fetch(props.data)
        .then((x) => x.json())
        .then((data) =>
          setQuiz(() => {
            console.log(isQuizLoaded);
            return formatData(data, setIsQuizLoaded);
          })
        );
    },
    [restartApp]
  );

  console.log(quiz);

  // const { data, error, isLoading } = useQuery('fetchQuizData', getData);

  // const getData = async () => {
  //   const res = await fetch(props.data);
  //   return res.json();
  // };

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

  return (
    isQuizLoaded && (
      <div className='container'>
        <QuestionsAnswers
          data={quiz[0]}
          questionID={'A'}
          updateAnswer={updateAnswer}
          result={result}
        />
        <QuestionsAnswers
          data={quiz[1]}
          questionID={'B'}
          updateAnswer={updateAnswer}
          result={result}
        />
        <QuestionsAnswers
          data={quiz[2]}
          questionID={'C'}
          updateAnswer={updateAnswer}
          result={result}
        />
        <QuestionsAnswers
          data={quiz[3]}
          questionID={'D'}
          updateAnswer={updateAnswer}
          result={result}
        />
        <QuestionsAnswers
          data={quiz[4]}
          questionID={'E'}
          updateAnswer={updateAnswer}
          result={result}
        />
        {result.length === 0 ? (
          <button onClick={checkResults} className='check-btn'>
            Check your answers!
          </button>
        ) : (
          <div className='btn-container'>
            <h2 className='score'>Your total score is {result}</h2>
            <button className='check-btn' onClick={getNewQuiz}>
              GET NEW QUIZ
            </button>
          </div>
        )}
      </div>
    )
  );
}
