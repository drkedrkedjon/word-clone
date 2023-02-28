import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Form from '../Form'
import Guess from '../Guess'
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Win from '../Win'
import Lost from '../Lost'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

// Logic gameFinished = 
let palabraCorecta = false
let quedanIntentos = true
let numeroGueses = 0
let disabled = false

function Game() {
  const [guesses, setGuesses] = React.useState([])

  function handleGuess(formImput) {
    setGuesses(oldData => [...oldData, formImput])
    palabraCorecta = formImput === answer ? true : false
    quedanIntentos = guesses.length < 5
    numeroGueses++
    disabled = palabraCorecta || !quedanIntentos
  }

  const filaArray = range(NUM_OF_GUESSES_ALLOWED);

  return (
    <>
      <div className='guess-results'>
        {filaArray.map(num => <Guess key={num} answer={answer} guess={guesses[num]} />)}
      </div>
      <Form handleGuess={handleGuess} disabled={disabled} />
      {palabraCorecta && <Win numeroGueses={numeroGueses} />}
      {!quedanIntentos && !palabraCorecta && <Lost answer={answer} />}
    </>
  );
}

export default Game;
