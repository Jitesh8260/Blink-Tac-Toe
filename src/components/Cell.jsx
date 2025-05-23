import React from "react";

const Cell = ({ value, onClick, highlight }) => {
  return (
    <div
      onClick={onClick}
      className={`w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center border cursor-pointer text-4xl select-none
        transition duration-300
        ${highlight ? "bg-yellow-300 border-yellow-500 shadow-lg animate-pulse rounded-lg" : "bg-white hover:bg-purple-100"}
      `}
    >
      {value}
    </div>
  );
};

export default Cell;
