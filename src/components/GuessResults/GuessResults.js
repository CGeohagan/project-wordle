import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils';

function GuessResults({ guesses, maxNumGuesses }) {
  return (
    <div className="guess-results">
      {range(maxNumGuesses).map((num) => (
        <Guess key={num} value={guesses[num]} />
      ))}
    </div>
  );
}

export default GuessResults;
