import axios from 'axios';

export const getQuizData = async (data) => {
  const response = await axios.get(data);
  const quizData = response.data;
  return quizData;
};
