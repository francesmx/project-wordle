import React from 'react';

function Banner({ gameStatus, numberGuesses, answer }) {
  const HappyBanner = () => (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numberGuesses === 1 ? '1 guess' : `${numberGuesses} guesses`}
        </strong>
        .
      </p>
    </div>
  );

  const SadBanner = () => (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );

  return (
    <>
      {gameStatus === 'won' && <HappyBanner />}
      {gameStatus === 'lost' && <SadBanner />}
    </>
  );
}

export default Banner;
