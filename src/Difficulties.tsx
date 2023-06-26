import React from 'react';

function Difficulties({ setConfiguration }) {
  return (
    <select
      name="difficulty"
      className="select"
      onChange={(e) => setConfiguration(e)}
    >
      <option value="any">Choose difficulty</option>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
  );
}

export default Difficulties;
