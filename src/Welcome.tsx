import React, { useState } from 'react';
import Categories from './Categories';
import Difficulties from './Difficulties';

export default function Welcome({ handleClick }) {
  const [categoryDiff, setCategoryDiff] = useState({
    category: '',
    difficulty: '',
  });

  const setConfiguration = (e) => {
    setCategoryDiff((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  let fetchURL = `https://opentdb.com/api.php?amount=5&category=${categoryDiff.category}&difficulty=${categoryDiff.difficulty}&type=multiple`;

  const urlRequest = () => {
    return handleClick(fetchURL);
  };

  return (
    <div className="container row flex-column bg-layout justify-space-around">
      <div className="title">
        <h1>Quizify</h1>
        <p>Test your knowledge!</p>
      </div>
      <div className="row flex-column options">
        <Categories setConfiguration={setConfiguration} />
        <Difficulties setConfiguration={setConfiguration} />
      </div>
      <button className="start-btn" onClick={urlRequest}>
        Start quiz
      </button>
    </div>
  );
}
