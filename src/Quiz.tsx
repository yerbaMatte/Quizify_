import React, { useState } from 'react';
import QuestionsAnswers from './QuestionsAnswers';
import { formatStrings } from './services/formatStrings';

export default function Quiz({ data, handleClick }): JSX.Element {
  const [checkClicked, setCheckClicked] = useState(false);
  //clean up the syntax
  let quiz = formatStrings(data);

  const questionAnswersSet = quiz.map((_, ind) => (
    <QuestionsAnswers data={quiz[ind]} key={ind} checkButton={checkClicked} />
  ));

  const clickHandler = () => {
    setCheckClicked((state) => !state);
  };

  return (
    <div className="container row flex-column bg-layout justify-space-around">
      {questionAnswersSet}
      <button className="start-btn" onClick={clickHandler}>
        Check your answers!
      </button>
    </div>
  );
}
