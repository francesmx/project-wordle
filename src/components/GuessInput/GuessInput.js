import React from 'react';

function GuessInput({ addGuess, gameStatus }) {
  const [guess, setGuess] = React.useState('');

  const handleChange = (newValue) => {
    setGuess(newValue.toUpperCase());
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addGuess({ id: crypto.randomUUID(), guess });
    setGuess('');
  };

  const disabled = gameStatus === 'won' || gameStatus === 'lost';

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleSubmit(event)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        minLength={5}
        maxLength={5}
        pattern={'[A-Z]{5}'}
        title="Five letter word"
        onChange={(event) => handleChange(event.target.value)}
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
