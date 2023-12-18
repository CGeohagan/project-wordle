import React from 'react';

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTenativeGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTenativeGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={tentativeGuess}
        pattern="[A-Za-z]{5}"
        title="5 letter word"
        onChange={(event) => setTenativeGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
