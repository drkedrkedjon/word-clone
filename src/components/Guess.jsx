import React from "react";
import { checkGuess } from "../game-helpers";

export default function Guess({ guess, answer }) {
  const arrayLetras = guess ? checkGuess(guess, answer) : ["", "", "", "", ""];

  return (
    <p className="guess">
      {arrayLetras.map((objeto) =>
        objeto ? (
          <span key={Math.random()} className={`cell ${objeto.status}`}>
            {objeto.letter}
          </span>
        ) : (
          <span key={Math.random()} className={"cell"}></span>
        )
      )}
    </p>
  );
}
