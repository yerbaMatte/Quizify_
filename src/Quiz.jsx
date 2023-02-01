import React, { useState } from 'react';
import QuestionsAnswers from './QuestionsAnswers';
import { nanoid } from 'nanoid';

export default function Quiz() {
  const [quiz, setQuiz] = useState([]);
  const [isQuizLoaded, setIsQuizLoaded] = useState(false);

  function unEscape(htmlStr) {
    htmlStr = htmlStr.replace(/&lt;/g, '<');
    htmlStr = htmlStr.replace(/&gt;/g, '>');
    htmlStr = htmlStr.replace(/&quot;/g, '"');
    htmlStr = htmlStr.replace(/&#039;/g, "'");
    htmlStr = htmlStr.replace(/&amp;/g, '&');
    htmlStr = htmlStr.replace(/&ntilde/g, 'ñ');
    return htmlStr;
  }

  React.useEffect(function () {
    fetch(
      'https://opentdb.com/api.php?amount=5&category=14&difficulty=easy&type=multiple'
    )
      .then((x) => x.json())
      .then((data) =>
        setQuiz(
          data.results.map((singleSet) => {
            const formatBadAnswers = singleSet.incorrect_answers.map((x) =>
              unEscape(x)
            );
            const formatCorrect = unEscape(singleSet.correct_answer);
            setIsQuizLoaded((prev) => !prev);
            return {
              ask: [unEscape(singleSet.question)],
              wrongAnswers: formatBadAnswers,
              correctAnswer: formatCorrect,
            };
          })
        )
      );
  }, []);

  const answers = {};
  const [result, setResult] = useState('');

  const updateAnswer = (questionId, answer) => {
    answers[questionId] = answer;
    console.log(answers);
  };

  function checkResults() {
    if (Object.keys(answers).length === 5) {
      setResult(
        `${
          Object.values(answers).filter((x) => x === true).length
        }/5 correct answers`
      );
    } else {
      console.log('select all answers');
    }
  }

  console.log(result);

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

        <button onClick={checkResults} className='check-btn'>
          Check your answers!
        </button>
      </div>
    )
  );
}
