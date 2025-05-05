import { useState } from "react";
import words from "./wordList.json";
import HangManDrawing from "./HangManDrawing";
import HangManWord from "./HangManWord";
import Keyboard from "./Keyboard";

function App() {
  const [WordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

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
        <HangManDrawing />
        <HangManWord />
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
