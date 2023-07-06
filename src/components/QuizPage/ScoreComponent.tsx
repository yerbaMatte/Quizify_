import React from 'react';

function ScoreComponent({ result }) {
  return (
    <div className='result'>
      <p>Your score is {result}/5</p>
    </div>
  );
}

export default ScoreComponent;
