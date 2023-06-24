import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Welcome from './Welcome';
import Quiz from './Quiz';

const queryClient = new QueryClient();

export default function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [urlFetch, setUrlFetch] = useState('');

  function clickHandler(data) {
    setIsStarted((prev) => !prev);
    setUrlFetch(data);
  }

  return (
    <QueryClientProvider client={queryClient}>
      {isStarted ? (
        <Quiz data={urlFetch} handleClick={clickHandler} />
      ) : (
        <Welcome handleClick={clickHandler} />
      )}
    </QueryClientProvider>
  );
}
