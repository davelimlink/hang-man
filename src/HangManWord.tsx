import React from "react";

function HangManWord() {
  const word = "test";
  const guessedLetters = ["t", "e", "s", "t"];
  return (
    <div
      style={{
        display: "flex",
        gap: " .25rem",
        fontSize: "2.5rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {word.split("").map((letter, index) => {
        return (
          <span
            key={index}
            style={{
              borderBottom: ".1em solid black",
              width: "2ch",
              textAlign: "center",
            }}
          >
            <span
              style={{
                visibility: guessedLetters.includes(letter)
                  ? "visible"
                  : "hidden",
                color: letter === word ? "black" : "red",
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default HangManWord;
