import * as Game from "./game";

describe("Game test", () => {
  const player1 = Game.Player.ONE;
  const player2 = Game.Player.TWO;

  describe("Toggle player", () => {
    test("after player 1 play", () => {
      expect(Game.TogglePlayer(player1)).toBe(player2);
    });
    test("after player 2 play", () => {
      expect(Game.TogglePlayer(player2)).toBe(player1);
    });
    test("after player null play", () => {
      expect(Game.TogglePlayer(null)).toBe(player1);
    });
  });

  describe("Score", () => {
    const score = {
      player1: 0,
      player2: 0
    };

    describe("Increase score", () => {
      test("after player 1 score", () => {
        const expectedScore = {
          player1: 1,
          player2: 0
        };

        expect(Game.IncreaseScore(score, player1)).toStrictEqual(expectedScore);
      });
      test("after player 2 score", () => {
        const expectedScore = {
          player1: 0,
          player2: 1
        };

        expect(Game.IncreaseScore(score, player2)).toStrictEqual(expectedScore);
      });
    });

    describe("Increase score by status", () => {
      test("after status equals VICTORY_PLAYER1", () => {
        const expectedScore = {
          player1: 1,
          player2: 0
        };

        expect(
          Game.IncreaseScoreByGameStatus(score, Game.GameStatus.VICTORY_PLAYER1)
        ).toStrictEqual(expectedScore);
      });
      test("after status equals VICTORY_PLAYER2", () => {
        const expectedScore = {
          player1: 0,
          player2: 1
        };

        expect(
          Game.IncreaseScoreByGameStatus(score, Game.GameStatus.VICTORY_PLAYER2)
        ).toStrictEqual(expectedScore);
      });

      test("after status equals DRAW", () => {
        const expectedScore = {
          player1: 0,
          player2: 0
        };

        expect(
          Game.IncreaseScoreByGameStatus(score, Game.GameStatus.DRAW)
        ).toStrictEqual(expectedScore);
      });

      test("after status equals PLAYING", () => {
        const expectedScore = {
          player1: 0,
          player2: 0
        };

        expect(
          Game.IncreaseScoreByGameStatus(score, Game.GameStatus.PLAYING)
        ).toStrictEqual(expectedScore);
      });
    });
  });

  describe("Message by status", () => {
    test("after status equals VICTORY_PLAYER1", () => {
      expect(Game.MessageByGameStatus(Game.GameStatus.VICTORY_PLAYER1)).toBe(
        "Player 1 wins!!"
      );
    });
    test("after status equals VICTORY_PLAYER2", () => {
      expect(Game.MessageByGameStatus(Game.GameStatus.VICTORY_PLAYER2)).toBe(
        "Player 2 wins!!"
      );
    });

    test("after status equals DRAW", () => {
      expect(Game.MessageByGameStatus(Game.GameStatus.DRAW)).toBe("Draw!!");
    });

    test("after status equals PLAYING", () => {
      expect(Game.MessageByGameStatus(Game.GameStatus.PLAYING)).toBe(null);
    });
  });
});
