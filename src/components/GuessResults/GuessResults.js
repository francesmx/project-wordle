import React from 'react';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessResults({ guesses, answer }) {
  const maxGuesses = range(0, NUM_OF_GUESSES_ALLOWED);

  if (!!guesses) {
    for (let i = 0; i < NUM_OF_GUESSES_ALLOWED; i++) {
      maxGuesses[i] = guesses[i];
    }
  }

  return (
    <div className="guess-results">
      {!!guesses &&
        maxGuesses.map((guess, index) => (
          <Guess key={index} value={guess} answer={answer} />
        ))}
    </div>
  );
}

export default GuessResults;
