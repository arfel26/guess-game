import React, { useState } from "react";

function HangmanGame() {
  const secretWord = "ILOVEYOU";
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const maxWrong = 6;
  const [gameOver, setGameOver] = useState(false);
  const [isValentineRevealed, setIsValentineRevealed] = useState(false);

  const displayWord = secretWord
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");

  if (displayWord.replace(/ /g, "") === secretWord && !isValentineRevealed) {
    setTimeout(() => setIsValentineRevealed(true), 1000);
  }

  const handleGuess = (letter) => {
    if (gameOver || isValentineRevealed) return;

    if (secretWord.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
    } else {
      setWrongGuesses(wrongGuesses + 1);
      if (wrongGuesses + 1 >= maxWrong) {
        setGameOver(true);
      }
    }
  };

  const resetGame = () => {
    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameOver(false);
    setIsValentineRevealed(false);
  };

  return (
    <div>
      {!isValentineRevealed ? (
        <div className="flex flex-col justify-center items-center min-h-screen">
          <div className="flex flex-col justify-center items-center py-10 px-5 space-y-5 ">
            <p className="text-5xl font-medium text-white">{displayWord}</p>

            <div className="mt-5 flex flex-col items-center space-y-2 text-white">
              <div className="grid grid-cols-10 gap-2">
                {"QWERTYUIOP".split("").map((letter) => (
                  <button
                    key={letter}
                    onClick={() => handleGuess(letter)}
                    disabled={guessedLetters.includes(letter) || gameOver}
                    className="bg-gray-400 p-3 text-3xl font-semibold rounded-sm shadow-sm 
                    hover:bg-gray-500 active:bg-gray-600 disabled:bg-gray-700 disabled:cursor-not-allowed disabled:text-white"
                  >
                    {letter}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-9 gap-2">
                {"ASDFGHJKL".split("").map((letter) => (
                  <button
                    key={letter}
                    onClick={() => handleGuess(letter)}
                    disabled={guessedLetters.includes(letter) || gameOver}
                    className="bg-gray-400 p-3 text-3xl font-semibold rounded-sm shadow-sm 
                    hover:bg-gray-500 active:bg-gray-600 disabled:bg-gray-700 disabled:cursor-not-allowed disabled:text-white"
                  >
                    {letter}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {"ZXCVBNM".split("").map((letter) => (
                  <button
                    key={letter}
                    onClick={() => handleGuess(letter)}
                    disabled={guessedLetters.includes(letter) || gameOver}
                    className="bg-gray-400 p-3 text-3xl font-semibold rounded-sm shadow-sm 
                    hover:bg-gray-500 active:bg-gray-600 disabled:bg-gray-700 disabled:cursor-not-allowed disabled:text-white"
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>

            <p className="px-3 py-1 bg-red-500 rounded-sm shadow-sm text-white font-semibold">
              Wrong Guesses: {wrongGuesses} / {maxWrong}
            </p>

            {gameOver && <p>Game Over. Try Again</p>}

            {gameOver && <button onClick={resetGame}>Restart</button>}
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center min-h-screen space-y-5">
          <h1 className="text-white text-5xl">Surprise 🥳</h1>
          <h1 className="text-white text-3xl">
            Congrats baby! Last question...
          </h1>
          <h1 className="text-white text-3xl">
            Will you be my valentine? ayie
          </h1>

          <button
            onClick={() => alert("WINNER!!!!!")}
            className="bg-red-500 hover:bg-red-700 rounded-sm shadow-sm text-white px-10 py-2 uppercase font-medium text-2xl"
          >
            yes
          </button>
        </div>
      )}
    </div>
  );
}

export default HangmanGame;
