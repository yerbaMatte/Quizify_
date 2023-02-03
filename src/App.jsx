import React, { useState } from 'react';
import Welcome from './Welcome';
import Quiz from './Quiz';

export default function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [urlFetch, setUrlFetch] = useState('');

  function clickHandler(data) {
    setIsStarted((prev) => !prev);
    setUrlFetch(data);
    console.log(urlFetch);
  }

  return (
    <React.Fragment>
      {isStarted ? (
        <Quiz data={urlFetch} handleClick={clickHandler} />
      ) : (
        <Welcome handleClick={clickHandler} />
      )}
    </React.Fragment>
  );
}
