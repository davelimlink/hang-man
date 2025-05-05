interface HangManWordProps {
  wordToGuess: string;
  guessedLetters: string[];
}

function HangManWord({ wordToGuess, guessedLetters }: HangManWordProps) {
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
      {wordToGuess.split("").map((letter, index) => {
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
                color: `${
                  wordToGuess
                    .split("")
                    .every((letter) => guessedLetters.includes(letter))
                    ? "black"
                    : "red"
                }`,
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
