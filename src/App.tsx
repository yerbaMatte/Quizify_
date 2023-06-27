import React, { useState } from 'react';
import { useQuery } from 'react-query';
import StartPage from './components/StartPage';
import QuizPage from './components/QuizPage';
import { getQuizData } from './services/getQuizData';

export default function App() {
  // URL for the HTTP request from <StartPage />
  const [urlFetch, setUrlFetch] = useState('');

  function clickHandler(data) {
    setUrlFetch(data);
  }

  // when url is defined, fetch data
  const { data, isSuccess } = useQuery(
    'quizData',
    () => getQuizData(urlFetch),
    //query config
    { enabled: urlFetch !== '', refetchOnWindowFocus: false }
  );
  // refetchOnWindowFocus: false <---- WOW!

  return (
    <>
      {isSuccess ? (
        <QuizPage data={data} />
      ) : (
        <StartPage handleClick={clickHandler} />
      )}
    </>
  );
}
