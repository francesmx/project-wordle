import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer, setGameStatus }) {
  const NUM_OF_CHARS = 5;
  const columns = range(0, NUM_OF_CHARS);
  let results = [];

  if (value) {
    results = checkGuess(value.guess, answer);

    let numberCorrectResults = 0;

    results.forEach((result) => {
      if (result.status === 'correct') {
        numberCorrectResults++;
      }
    });

    if (numberCorrectResults === 5) {
      setGameStatus('won');
    }
  }

  return (
    <p className="guess">
      {value &&
        !!results &&
        results.map((result, index) => (
          <span key={index} className={`cell ${result.status}`}>
            {result.letter}
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
