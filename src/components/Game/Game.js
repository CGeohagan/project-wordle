import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      console.log('Hello! Sorry you have reached the max number of guesses');
      return;
    }
    setGuesses([...guesses, tentativeGuess]);
  }

  return (
    <>
      <GuessResults
        guesses={guesses}
        answer={answer}
        maxNumGuesses={NUM_OF_GUESSES_ALLOWED}
      />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
