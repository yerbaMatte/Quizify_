import React, { useState } from 'react';

export default function Welcome(props) {
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

  const getURL = () => {
    return props.handleClick(fetchURL);
  };

  return (
    <div className="container row flex-column bg-layout justify-space-around">
      <div className="title">
        <h1>Quizify</h1>
        <p>Test your knowledge!</p>
      </div>
      <div className="row flex-column options">
        <select
          name="category"
          className="select"
          onChange={(e) => setConfiguration(e)}
        >
          <option value="any">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals &amp; Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science &amp; Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
          <option value="32">
            Entertainment: Cartoon &amp; Animations
          </option>{' '}
        </select>
        <select
          name="difficulty"
          className="select"
          onChange={(e) => setConfiguration(e)}
        >
          <option value="any">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <button className="start-btn" onClick={getURL}>
        Start quiz
      </button>
    </div>
  );
}
