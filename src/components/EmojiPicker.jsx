import React, { useState } from "react";
import { emojiCategories } from "../utils/emojiCategories";
import { Sparkles } from "lucide-react";

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
    <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl p-8 w-full max-w-lg mx-auto mt-10 text-white transition-all">
      <div className="flex items-center justify-center mb-6">
        <Sparkles className="text-yellow-300 mr-2" />
        <h2 className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
          Choose Your Emoji Powers
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <label className="block text-sm font-semibold mb-1 text-black">
            🧍 Player 1
          </label>
          <select
            className="w-full px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 text-black"
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
          <label className="block text-sm font-semibold mb-1 text-black">
            🧍 Player 2
          </label>
          <select
            className="w-full px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-violet-400 text-black"
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
          className="w-full bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 transition text-white font-bold py-3 rounded-xl shadow-lg hover:scale-105 active:scale-95"
        >
          🚀 Start Game.
        </button>
      </div>
    </div>
  );
};

export default EmojiPicker;
