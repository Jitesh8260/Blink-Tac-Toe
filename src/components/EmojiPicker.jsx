import React, { useState } from "react";
import { emojiCategories } from "../utils/emojiCategories";

const EmojiPicker = ({ setPlayerEmojis, setGameStarted }) => {
  const [selected1, setSelected1] = useState("");
  const [selected2, setSelected2] = useState("");

  const handleStart = () => {
    if (selected1 && selected2 && selected1 !== selected2) {
      setPlayerEmojis({
        player1: emojiCategories[selected1],
        player2: emojiCategories[selected2],
      });
      setGameStarted(true);
    } else {
      alert("Players must select different categories!");
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
      <h2 className="text-xl font-bold mb-4 text-center">Select Emoji Categories</h2>
      
      <div className="flex flex-col gap-4">
        <div>
          <label className="font-medium">Player 1:</label>
          <select
            className="w-full p-2 mt-1 border rounded"
            value={selected1}
            onChange={(e) => setSelected1(e.target.value)}
          >
            <option value="">-- Choose Category --</option>
            {Object.keys(emojiCategories).map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-medium">Player 2:</label>
          <select
            className="w-full p-2 mt-1 border rounded"
            value={selected2}
            onChange={(e) => setSelected2(e.target.value)}
          >
            <option value="">-- Choose Category --</option>
            {Object.keys(emojiCategories).map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <button
          onClick={handleStart}
          className="bg-purple-600 text-white font-bold py-2 rounded hover:bg-purple-700 transition"
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default EmojiPicker;
