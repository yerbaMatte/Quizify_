import React, { useState } from 'react';
import Welcome from './Welcome';
import { getQuizData } from './services/getQuizData';
import { useQuery } from 'react-query';
import Quiz from './Quiz';

export default function App() {
  const [urlFetch, setUrlFetch] = useState('');

  function clickHandler(data) {
    setUrlFetch(data);
  }

  const { data, isSuccess } = useQuery(
    ['quizData', urlFetch],
    () => getQuizData(urlFetch),
    {
      enabled: !!urlFetch, // Enable or disable the query based on the value of urlFetch
    }
  );

  return !isSuccess ? (
    <Welcome handleClick={clickHandler} />
  ) : (
    <Quiz data={data} handleClick={clickHandler} />
  );
}
