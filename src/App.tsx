import React, { useState } from 'react';
import { useQuery } from 'react-query';
import StartPage from './components/StartPage';
import QuizPage from './components/QuizPage';
import { getQuizData } from './services/getQuizData';
import { storeQuizData } from './services/storeQuizData';
import { decodeJsonEntities } from './services/decodeData';

export default function App() {
  // URL for the HTTP request from <StartPage />
  const [urlFetch, setUrlFetch] = useState('');

  function getQuizOptions(data) {
    setUrlFetch(data);
  }
  // when url is defined, fetch data
  const { data, isSuccess } = useQuery(
    'quizData',
    () => getQuizData(urlFetch),
    //query config
    { enabled: !!urlFetch, refetchOnWindowFocus: false }
    // refetchOnWindowFocus: false <---- WOW!
  );
  // declare quizData if data is fetched successfully --> decode and store it inside the array of obj
  let quizData = null;
  if (isSuccess) quizData = storeQuizData(decodeJsonEntities(data.results));

  return (
    <>
      {isSuccess ? (
        <QuizPage quizData={quizData} />
      ) : (
        <StartPage getQuizOptions={getQuizOptions} />
      )}
    </>
  );
}
