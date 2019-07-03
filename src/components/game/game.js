export const GameStatus = {
  VICTORY_PLAYER1: "victory_player1",
  VICTORY_PLAYER2: "victory_player2",
  DRAW: "draw",
  PLAYING: "playing"
};

export const Player = {
  ONE: "player1",
  TWO: "player2"
};

export const INITIAL_STATE = {
  player: Player.ONE,
  gameStatus: GameStatus.PLAYING,
  score: {
    player1: 0,
    player2: 0
  },
  message: null,
  board: [
    [{ id: 1, player: null }, { id: 2, player: null }, { id: 3, player: null }],
    [{ id: 4, player: null }, { id: 5, player: null }, { id: 6, player: null }],
    [{ id: 7, player: null }, { id: 8, player: null }, { id: 9, player: null }]
  ]
};

export const TogglePlayer = activePlayer =>
  activePlayer == Player.ONE ? Player.TWO : Player.ONE;

export const MakeMove = (board, moveId, player) =>
  board.map(line =>
    line.map(cell => (cell.id === moveId ? { ...cell, player: player } : cell))
  );

export const ClearBoard = board =>
  board.map(column => column.map(cell => cell.player));

export const GameStatusByCleanBoard = (cleanBoard, currentPlayer) =>
  doPlayerWon(cleanBoard)
    ? currentPlayer == Player.ONE
      ? GameStatus.VICTORY_PLAYER1
      : GameStatus.VICTORY_PLAYER2
    : noMoreMoves(cleanBoard)
    ? GameStatus.DRAW
    : GameStatus.PLAYING;

export const IncreaseScoreByGameStatus = (score, gameStatus) =>
  gameStatus == GameStatus.VICTORY_PLAYER1
    ? IncreaseScore(score, Player.ONE)
    : gameStatus == GameStatus.VICTORY_PLAYER2
    ? IncreaseScore(score, Player.TWO)
    : score;

export const IncreaseScore = (score, player) => {
  return {
    ...score,
    player1: score.player1 + (player == Player.ONE ? 1 : 0),
    player2: score.player2 + (player == Player.TWO ? 1 : 0)
  };
};

export const MessageByGameStatus = gameStatus => {
  switch (gameStatus) {
    case GameStatus.VICTORY_PLAYER1:
      return "Player 1 wins!!";
    case GameStatus.VICTORY_PLAYER2:
      return "Player 2 wins!!";
    case GameStatus.DRAW:
      return "Draw!!";
    default:
      return null;
  }
};

const noMoreMoves = board =>
  !board.some(column => column.some(cell => cell == null));

const doPlayerWon = board =>
  sameDownwardDiagonal(board) ||
  sameUpwardDiagonal(board) ||
  board.some((_, i) =>
    sameLine(board, i) || sameColumn(board, i) ? true : false
  );

const sameDownwardDiagonal = board =>
  board[0][0] !== null &&
  board[0][0] === board[1][1] &&
  board[1][1] === board[2][2];

const sameUpwardDiagonal = board =>
  board[2][0] !== null &&
  board[2][0] === board[1][1] &&
  board[1][1] === board[0][2];

const sameLine = (board, i) =>
  board[i][0] !== null &&
  board[i][0] === board[i][1] &&
  board[i][1] === board[i][2];

const sameColumn = (board, i) =>
  board[0][i] !== null &&
  board[0][i] === board[1][i] &&
  board[1][i] === board[2][i];
