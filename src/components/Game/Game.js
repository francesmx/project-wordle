import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Banner from '../Banner';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('incomplete');

  const addGuess = (tentativeGuess) => {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess.guess.toUpperCase() === answer) {
      setGameStatus('won');
    }
  };

  return (
    <>
      <GuessResults
        guesses={guesses}
        answer={answer}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
      />
      <GuessInput addGuess={addGuess} gameStatus={gameStatus} />
      <Banner gameStatus={gameStatus} guesses={guesses} answer={answer} />
    </>
  );
}

export default Game;
