import { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import HangManDrawing from "./HangManDrawing";
import HangManWord from "./HangManWord";
import Keyboard from "./Keyboard";

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  // Function to handle letter guesses
  const inCorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = inCorrectLetters.length >= 6; // Number of incorrect guesses
  //Hangman drawing is only 6 parts
  const isWinner = wordToGuess
    .split("") // Split the word into letters
    .every((letter) => guessedLetters.includes(letter));

  // Check if all letters in the word have been guessed
  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentsLetters) => [...currentsLetters, letter]);
    },
    [guessedLetters, isLoser, isWinner] // Check if the letter has already been guessed
  );

  useEffect(() => {
    const handlers = (e: KeyboardEvent) => {
      const key = e.key;

      if (key !== "Enter") return;
      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener("keypress", handlers);

    return () => {
      document.removeEventListener("keypress", handlers);
    };
  }, [guessedLetters]);

  // Handle letter guesses
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handleKeyDown);
    return () => {
      document.removeEventListener("keypress", handleKeyDown);
    };
  }, [guessedLetters]); // Check if the key pressed is a letter

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
        <div style={{ fontSize: "2rem", textAlign: "center" }}>
          {isWinner && "You Win! - Refresh to play again!"}
          {isLoser && "You Lose! - Refresh to play again!"}
        </div>
        <HangManDrawing numberOfGuesses={inCorrectLetters.length} />
        <HangManWord
          reveal={isLoser}
          guessedLetters={guessedLetters}
          wordToGuess={wordToGuess}
        />
        <div
          style={{
            alignSelf: "stretch",
          }}
        >
          <Keyboard
            activeLetter={guessedLetters.filter((letter) =>
              wordToGuess.includes(letter)
            )}
            inactiveLetters={inCorrectLetters}
            addGuessedLetter={addGuessedLetter}
            disabled={isLoser || isWinner}
          />
        </div>
      </div>
    </>
  );
}

export default App;
