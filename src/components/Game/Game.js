import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Form from '../Form'
import Guess from '../Guess'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])

  function handleGuess(formImput) {
    setGuesses(oldData => [...oldData, formImput])
  }

  return (
    <>
      <Guess
        guesses={guesses}
      />
      <Form
        handleGuess={handleGuess}
      />
    </>
  );
}

export default Game;
