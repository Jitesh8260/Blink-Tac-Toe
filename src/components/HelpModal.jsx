import React from "react";

const HelpModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-xl rounded-lg p-6 relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4 text-purple-600">🆘 How to Play</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Choose your emoji category before starting.</li>
          <li>Players take turns placing emojis on a 3x3 grid.</li>
          <li>Each player can have only 3 emojis on the board at a time.</li>
          <li>If a 4th emoji is placed, the oldest one vanishes (FIFO).</li>
          <li>You can't place your new emoji where your first one was.</li>
          <li>First to make 3 in a row (same player) wins!</li>
          <li>No draw possible due to vanishing rule.</li>
        </ul>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500">Good luck and have fun! 🎉</span>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;
