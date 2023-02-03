import React, { useState } from 'react';
import Welcome from './Welcome';
import Quiz from './Quiz';

export default function App() {
  const [isStarted, setIsStarted] = useState(false);

  function clickHandler() {
    setIsStarted((prev) => !prev);
  }

  return (
    <React.Fragment>
      {isStarted ? (
        <Quiz handleClick={clickHandler} />
      ) : (
        <Welcome handleClick={clickHandler} />
      )}
    </React.Fragment>
  );
}
