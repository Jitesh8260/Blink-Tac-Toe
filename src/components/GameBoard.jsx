import React, { useState } from "react";
import Cell from "./Cell";
import { checkWin } from "../utils/gameLogic";

const GameBoard = ({ playerEmojis, currentPlayer, setCurrentPlayer }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winningCells, setWinningCells] = useState([]);
  const [emojiQueue, setEmojiQueue] = useState({
    player1: [],
    player2: [],
  });

  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (winner || board[index]) return;

    const currentQueue = [...emojiQueue[currentPlayer]];
    const playerEmojiSet = playerEmojis[currentPlayer];
    const newEmoji = playerEmojiSet[Math.floor(Math.random() * playerEmojiSet.length)];

    let newBoard = [...board];

    // Vanishing rule: remove oldest emoji if already 3 on board
    if (currentQueue.length === 3) {
      const { index: oldIndex } = currentQueue.shift();

      if (oldIndex === index) {
        alert("You cannot place new emoji where your oldest one was!");
        return;
      }

      newBoard[oldIndex] = null;  // Remove oldest emoji visually
    }

    // Place new emoji
    newBoard[index] = { player: currentPlayer, emoji: newEmoji };
    currentQueue.push({ index, emoji: newEmoji });

    setBoard(newBoard);
    setEmojiQueue({
      ...emojiQueue,
      [currentPlayer]: currentQueue,
    });

    // Check win and get winning line
    const winningLine = checkWin(newBoard, currentPlayer);
    if (winningLine) {
      setWinningCells(winningLine);
      setWinner(currentPlayer);
      return;
    }

    // Switch turn
    setCurrentPlayer(currentPlayer === "player1" ? "player2" : "player1");
  };

  const renderCell = (i) => {
    const cell = board[i];
    const val = cell ? cell.emoji : "";
    const isWinningCell = winningCells.includes(i);

    return (
      <Cell
        key={i}
        value={val}
        onClick={() => handleClick(i)}
        highlight={isWinningCell}
      />
    );
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setEmojiQueue({ player1: [], player2: [] });
    setWinner(null);
    setWinningCells([]);
    setCurrentPlayer("player1");
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 9 }, (_, i) => renderCell(i))}
      </div>

      {winner && (
        <>
          <h2 className="text-xl font-bold mt-4 text-green-700">
            {winner.toUpperCase()} Wins! 🎉
          </h2>
          <button
            onClick={handleReset}
            className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
          >
            Play Again
          </button>
        </>
      )}
    </div>
  );
};

export default GameBoard;
