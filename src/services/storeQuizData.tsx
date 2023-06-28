export const storeQuizData = (data) => {
  const results = data.map((singleSet) => {
    const { question, correct_answer, incorrect_answers } = singleSet;

    return {
      question,
      wrongAnswers: incorrect_answers,
      correctAnswer: correct_answer,
    };
  });

  return results;
};
