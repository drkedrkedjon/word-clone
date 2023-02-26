import React from "react";

export default function Guess({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => {
        return <p key={index}>{guess}</p>;
      })}
    </div>
  );
}
