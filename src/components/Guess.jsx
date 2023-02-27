import React from "react";

export default function Guess({ guesses }) {
  const splitLetters = guesses ? guesses.split("") : ["", "", "", "", ""];

  return (
    <p className="guess">
      {splitLetters.map((letra, index) => (
        <span key={index} className="cell">
          {letra}
        </span>
      ))}
    </p>
  );
}
