import React, { useState } from 'react';
import QuestionsAnswers from './QuestionsAnswers';

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

  let userAnswers = [];

  function dataHandler(data) {
    userAnswers.push(data);
    console.log(userAnswers);
  }

  return (
    isQuizLoaded && (
      <div className='container'>
        <QuestionsAnswers data={quiz[0]} dataHandler={dataHandler} />
        <QuestionsAnswers data={quiz[1]} dataHandler={dataHandler} />
        <QuestionsAnswers data={quiz[2]} dataHandler={dataHandler} />
        <QuestionsAnswers data={quiz[3]} dataHandler={dataHandler} />
        <QuestionsAnswers data={quiz[4]} dataHandler={dataHandler} />
        <button onClick={dataHandler} className='check-btn'>
          Check your answers!
        </button>
      </div>
    )
  );
}
