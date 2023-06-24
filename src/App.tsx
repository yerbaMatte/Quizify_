import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Welcome from './Welcome';
import Quiz from './Quiz';

const queryClient = new QueryClient();

export default function App() {
  const [urlFetch, setUrlFetch] = useState('');

  function clickHandler(data) {
    setUrlFetch(data);
  }

  return (
    <QueryClientProvider client={queryClient}>
      {urlFetch ? (
        <Quiz data={urlFetch} handleClick={clickHandler} />
      ) : (
        <Welcome handleClick={clickHandler} />
      )}
    </QueryClientProvider>
  );
}
