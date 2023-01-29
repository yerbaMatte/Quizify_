import React from 'react';

export default function Welcome(props) {
  return (
    <div className='container'>
      <h1 className='title'>Quizzical</h1>
      <p className='title-desc'>Test your knowledge!</p>
      <button className='start-btn' onClick={props.handleClick}>
        Start quiz
      </button>
    </div>
  );
}
