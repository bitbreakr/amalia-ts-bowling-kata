import { BowlingGame } from "../src/bowling-score";

describe(`${BowlingGame.name}`, () => {
  afterEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
    jest.clearAllMocks();
  });

  describe(`${BowlingGame.prototype.roll.name}`, () => {
    it("should create a new frame when there is a strike", () => {
      const game = new BowlingGame();
      const pushSpy = jest.spyOn(Array.prototype, "push");
      game.roll(10);
      expect(pushSpy).toHaveBeenCalledTimes(1);
    });

    it("should throw an error if more than 3 balls are rolled in the tenth frame ", () => {
      const game = new BowlingGame();

      let error!: Error;
      try {
        for (let i = 0; i < 22; i++) {
          game.roll(0);
        }
      } catch (e) {
        error = e as Error;
      }

      expect(error).toBeDefined();
      expect(error.message).toBe(
        "no more than three balls can be rolled in tenth frame",
      );
    });
  });

  describe(`${BowlingGame.prototype.score.name}`, () => {
    it("should return 0 if there are no rolls", () => {
      const game = new BowlingGame();
      const rollSpy = jest.spyOn(BowlingGame.prototype, "roll");

      expect(rollSpy).not.toHaveBeenCalled();
      expect(game.score()).toEqual(0);
    });

    it("should return 0 points when rolling 20 times without scoring", () => {
      const game = new BowlingGame();
      const rollSpy = jest.spyOn(BowlingGame.prototype, "roll");
      for (let i = 0; i < 20; i++) {
        game.roll(0);
      }

      expect(rollSpy).toHaveBeenCalledTimes(20);
      expect(game.score()).toEqual(0);
    });

    it("score should not be equal to 0 if the player as scored", () => {
      const game = new BowlingGame();
      const rollSpy = jest.spyOn(BowlingGame.prototype, "roll");

      game.roll(3);
      game.roll(5);
      game.roll(7);

      for (let i = 0; i < 17; i++) {
        game.roll(0);
      }

      expect(rollSpy).toHaveBeenCalledTimes(20);
    });

    it("score should equals 24 with 1 spare regular pins knocked down", () => {
      const game = new BowlingGame();
      const rollSpy = jest.spyOn(BowlingGame.prototype, "roll");

      game.roll<"spare">(5);
      game.roll<"spare">(5);
      game.roll(7);

      for (let i = 0; i < 17; i++) {
        game.roll(0);
      }

      expect(rollSpy).toHaveBeenCalledTimes(20);
      expect(game.score()).toEqual(24);
    });

    it("score should equals 36 with 1 spare and regular pins knocked down", () => {
      const game = new BowlingGame();
      const rollSpy = jest.spyOn(BowlingGame.prototype, "roll");

      game.roll(1);
      game.roll(4);
      game.roll(4);
      game.roll(5);
      game.roll<"spare">(6);
      game.roll<"spare">(4);
      game.roll(5);
      game.roll(2);

      expect(rollSpy).toHaveBeenCalledTimes(8);
      expect(game.score()).toEqual(36);
    });

    it("score should equals 133 with 5 spares, 2 strikes and regular pins knocked down", () => {
      const game = new BowlingGame();
      const rollSpy = jest.spyOn(BowlingGame.prototype, "roll");

      game.roll(1);
      game.roll(4);
      game.roll(4);
      game.roll(5);
      game.roll<"spare">(6);
      game.roll<"spare">(4);
      game.roll<"spare">(5);
      game.roll<"spare">(5);
      game.roll<"strike">(10);
      game.roll(0);
      game.roll(1);
      game.roll<"spare">(7);
      game.roll<"spare">(3);
      game.roll<"spare">(6);
      game.roll<"spare">(4);
      game.roll<"strike">(10);
      game.roll<"spare">(2);
      game.roll<"spare">(8);
      game.roll(6);

      expect(rollSpy).toHaveBeenCalledTimes(19);
      expect(game.score()).toEqual(133);
    });
  });
});
