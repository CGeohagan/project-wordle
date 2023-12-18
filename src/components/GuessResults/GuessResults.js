import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils';

function GuessResults({ guesses, answer, maxNumGuesses }) {
  return (
    <div className="guess-results">
      {range(maxNumGuesses).map((num) => (
        <Guess key={num} answer={answer} value={guesses[num]} />
      ))}
    </div>
  );
}

export default GuessResults;
