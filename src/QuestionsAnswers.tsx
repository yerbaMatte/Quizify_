import React, { useState, useMemo } from 'react';

export default function QuestionsAnswers({ data, checkButton }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const { ask, wrongAnswers, correctAnswer } = data;

  // Get array of mixed answers
  const mixedAnswers = useMemo(() => {
    return [...wrongAnswers, correctAnswer].sort(() => Math.random() - 0.5);
  }, [ask]);

  const selectAnswer = (e) => {
    const selectedOption = e.target.innerText;
    setSelectedAnswer(selectedOption);
    setIsValid(selectedOption === correctAnswer);
  };

  const isCorrect = (answer) =>
    answer === correctAnswer ? 'correct' : 'wrong';

  const answers = mixedAnswers.map((answer, id) => (
    <div
      onClick={selectAnswer}
      // className={`answer ${selectedAnswer === answer ? 'selected' : ''}`}
      className={`answer ${isCorrect(answer)}`}
      key={id}
    >
      {answer}
    </div>
  ));

  return (
    <div className="container-child">
      <h2>{ask}</h2>
      {answers}
    </div>
  );
}
