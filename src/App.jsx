// src/App.jsx
import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import EmojiPicker from "./components/EmojiPicker";
import TurnIndicator from "./components/TurnIndicator";
import HelpModal from "./components/HelpModal";

const App = () => {
  const [playerEmojis, setPlayerEmojis] = useState({ player1: [], player2: [] });
  const [gameStarted, setGameStarted] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState("player1");
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-300 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">🌟 Blink Tac Toe 🌟</h1>

      {!gameStarted ? (
        <EmojiPicker setPlayerEmojis={setPlayerEmojis} setGameStarted={setGameStarted} />
      ) : (
        <>
          <TurnIndicator currentPlayer={currentPlayer} playerEmojis={playerEmojis} />
          <GameBoard
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
            playerEmojis={playerEmojis}
          />
          <button
            onClick={() => setShowHelp(true)}
            className="fixed bottom-4 right-4 bg-purple-600 text-white px-4 py-2 rounded shadow hover:bg-purple-700"
          >
            Help
          </button>
          <HelpModal show={showHelp} onClose={() => setShowHelp(false)} />
        </>
      )}
    </div>
  );
};

export default App;
