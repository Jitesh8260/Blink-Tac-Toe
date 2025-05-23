export const checkWin = (board, currentPlayer) => {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (
      board[a] &&
      board[b] &&
      board[c] &&
      board[a].player === currentPlayer &&
      board[b].player === currentPlayer &&
      board[c].player === currentPlayer
    ) {
      return line; // Return winning cells positions
    }
  }
  return null;
};
