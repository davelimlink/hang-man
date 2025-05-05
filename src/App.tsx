import { useState } from "react";
import words from "./wordList.json";
import HangManDrawing from "./HangManDrawing";
import HangManWord from "./HangManWord";
import Keyboard from "./Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  // Function to handle letter guesses
  const inCorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  return (
    <>
      <div
        style={{
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "2rem", textAlign: "center" }}>lose or win</div>
        <HangManDrawing numberOfGuesses={inCorrectLetters.length} />
        <HangManWord
          guessedLetters={guessedLetters}
          wordToGuess={wordToGuess}
        />
        <div
          style={{
            alignSelf: "stretch",
          }}
        >
          <Keyboard />
        </div>
      </div>
    </>
  );
}

export default App;
