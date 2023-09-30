import React from 'react';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessResults({ guesses, answer, gameStatus, setGameStatus }) {
  if (guesses.length === 6 && gameStatus !== 'won') {
    setGameStatus('lost');
  }

  return (
    <div className="guess-results">
      {!!guesses &&
        range(NUM_OF_GUESSES_ALLOWED).map((num) => (
          <Guess
            key={num}
            value={guesses[num]}
            answer={answer}
            setGameStatus={setGameStatus}
          />
        ))}
    </div>
  );
}

export default GuessResults;
