import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  const handleChange = (newValue) => {
    setGuess(newValue.toUpperCase());
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(guess);
    setGuess('');
  };

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
        pattern={'[A-Z]{5}'}
        onChange={(event) => handleChange(event.target.value)}
      />
    </form>
  );
}

export default GuessInput;
