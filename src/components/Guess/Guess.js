import React from 'react';
import { range } from '../../utils';

function Guess({ value }) {
  const NUM_OF_CHARS = 5;
  const columns = range(0, NUM_OF_CHARS);
  return (
    <p className="guess">
      {value &&
        value.guess.split('').map((char, index) => (
          <span key={index} className="cell">
            {char}
          </span>
        ))}
      {!value &&
        columns.map((column, index) => (
          <span key={index} className="cell"></span>
        ))}
    </p>
  );
}

export default Guess;
