import React, { useMemo, useState } from 'react';

export default function QuestionAndAnswers({
  data,
  checkAnswers,
  id,
  setResult,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const { question, wrongAnswers, correctAnswer } = data;

  // Get array of mixed answers - strings
  const mixedAnswers = useMemo(() => {
    return [...wrongAnswers, correctAnswer].sort(() => Math.random() - 0.5);
  }, [question]);

  const selectAnswer = (e) => {
    const selected = e.target.innerText;
    setSelectedAnswer(selected);
    setResult((result) => {
      const updatedResult = new Map(result);
      updatedResult.set(id, correctAnswer === selected);
      return updatedResult;
    });
  };

  const answerColor = (answer, selectedAnswer, checkAnswers) => {
    if (checkAnswers) {
      if (answer === correctAnswer) return 'correct-answer';
      if (selectedAnswer === answer && answer !== correctAnswer)
        return 'wrong-answer';
    } else if (answer === selectedAnswer) {
      return 'selected-answer';
    }
    return '';
  };

  return (
    <div className='container-child'>
      <h2>{question}</h2>
      {mixedAnswers.map((answer, ind) => (
        <div
          key={ind}
          className={`answer ${answerColor(
            answer,
            selectedAnswer,
            checkAnswers
          )} `}
          onClick={selectAnswer}
        >
          {answer}
        </div>
      ))}
    </div>
  );
}
