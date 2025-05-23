import React from "react";

const TurnIndicator = ({ currentPlayer, playerEmojis }) => {
  return (
    <div className="text-center mt-4">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
        🎮 Current Turn: <span className="text-purple-600">{currentPlayer.toUpperCase()}</span>
      </h2>
      <div className="flex justify-center gap-2 mt-2 text-2xl">
        {playerEmojis[currentPlayer].map((emoji, index) => (
          <span key={index}>{emoji}</span>
        ))}
      </div>
    </div>
  );
};

export default TurnIndicator;
