import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : `cell`;
  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer, setGameStatus }) {
  const guess = value ? value.guess : '';
  const result = checkGuess(guess, answer);
  let numberCorrectResults = 0;

  result &&
    result.forEach((letter) => {
      if (letter.status === 'correct') {
        numberCorrectResults++;
      }
    });

  if (numberCorrectResults === 5) {
    setGameStatus('won');
  }

  return (
    <p className="guess">
      {range(5).map((num) => {
        return (
          <Cell
            key={num}
            letter={result ? result[num].letter : undefined}
            status={result ? result[num].status : undefined}
          />
        );
      })}
    </p>
  );
}

export default Guess;
