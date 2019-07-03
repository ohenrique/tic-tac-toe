import {
  MakeMove,
  ClearBoard,
  TogglePlayer,
  GameStatusByCleanBoard,
  IncreaseScoreByGameStatus,
  INITIAL_STATE,
  MessageByGameStatus,
  GameStatus
} from "../../components/game/game";

export const Types = {
  PLAY: "game/PLAY",
  RESET: "game/RESET",
  RESTART: "game/RESTART"
};

export default function game(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.PLAY:
      const finalBoard = MakeMove(action.board, action.item.id, state.player);
      const status = GameStatusByCleanBoard(
        ClearBoard(finalBoard),
        state.player
      );
      const score = IncreaseScoreByGameStatus(state.score, status);
      const finalState = {
        ...state,
        score: score,
        gameStatus: status,
        message: MessageByGameStatus(status),
        player: TogglePlayer(state.player),
        board: finalBoard
      };

      return finalState;

    case Types.RESTART:
      return {
        ...state,
        board: INITIAL_STATE.board,
        gameStatus: GameStatus.PLAYING,
        message: MessageByGameStatus(GameStatus.PLAYING)
      };
    case Types.RESET:
      return INITIAL_STATE;

    default:
      return state;
  }
}

export const Creators = {
  resetGame: () => ({
    type: Types.RESET
  }),

  play: (board, item) => ({
    type: Types.PLAY,
    board,
    item
  }),

  restartGame: () => ({
    type: Types.RESTART
  })
};
