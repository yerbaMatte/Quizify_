import React, { useState } from 'react';
import Welcome from './Welcome';
import Quiz from './Quiz';

export default function App() {
  const [isStarted, setIsStarted] = useState(true);

  function clickHandler() {
    setIsStarted((prev) => !prev);
  }

  return (
    <div>{isStarted ? <Quiz /> : <Welcome handleClick={clickHandler} />}</div>
  );
}
