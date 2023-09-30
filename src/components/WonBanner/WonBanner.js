import React from 'react';
import Banner from '../Banner';

function WonBanner({ numberGuesses }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numberGuesses === 1 ? '1 guess' : `${numberGuesses} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WonBanner;
