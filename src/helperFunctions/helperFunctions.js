import axios from 'axios';

export const formatData = (data) => {
  function unEscape(htmlStr) {
    htmlStr = htmlStr.replace(/&lt;/g, '<');
    htmlStr = htmlStr.replace(/&gt;/g, '>');
    htmlStr = htmlStr.replace(/&quot;/g, '"');
    htmlStr = htmlStr.replace(/&#039;/g, "'");
    htmlStr = htmlStr.replace(/&amp;/g, '&');
    htmlStr = htmlStr.replace(/&ntilde/g, 'ñ');
    return htmlStr;
  }

  const results = data.results.map((singleSet) => {
    const formatBadAnswers = singleSet.incorrect_answers.map((x) =>
      unEscape(x)
    );
    const formatCorrect = unEscape(singleSet.correct_answer);

    return {
      ask: [unEscape(singleSet.question)],
      wrongAnswers: formatBadAnswers,
      correctAnswer: formatCorrect,
    };
  });

  return results;
};

export const fetchAxios = async (data) => {
  const response = await axios.get(data);
  const quizData = response.data;
  return quizData;
};
