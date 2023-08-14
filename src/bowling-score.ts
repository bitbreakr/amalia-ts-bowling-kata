import { DownedPinsPossibilities, KnockDown, ThrowingLuck } from "./types";

export class BowlingGame {
  public frames: Array<number[]> = [];
  constructor() {
    this.frames.push([]);
  }

  /**
   * Rolls a ball and adds the number of downed pins to the current frame.
   * @example
   * // roll<strike>(arg)
   * // accepts only 10 as argument
   *
   * // roll<spare>(arg)
   * // accepts only from 1 to 9 as argument
   *
   * // roll(arg)
   * // accepts  from 0 to 10 as argument
   *
   * @param fallenPins The number of downed pins.
   */
  public roll<P extends ThrowingLuck>(
    fallenPins: KnockDown<DownedPinsPossibilities, P>,
  ): void {
    const totalFrames = this.frames.length;
    const maxRolls = totalFrames === 10 ? 3 : 2;
    const lastFrame = this.frames.at(totalFrames - 1)!;

    if (totalFrames === 10 && lastFrame.length === maxRolls) {
      throw new Error("no more than three balls can be rolled in tenth frame");
    }

    if (lastFrame.length < maxRolls) {
      lastFrame!.push(fallenPins);
    } else {
      this.frames.push(fallenPins === 10 ? [fallenPins, 0] : [fallenPins]);
    }
  }

  /**
   * Calculates the score for a bowling game.
   *
   * @returns {number} The score for the bowling game.
   *
   */
  public score(): number {
    return this.frames.reduce(
      (points, currentFrame, currentFrameIdx, rolls) => {
        let bonus = 0;
        const nextFrame = rolls[currentFrameIdx + 1];
        const [currentFirstRoll, currentLastRoll] = currentFrame;

        if (10 - currentFirstRoll === currentLastRoll && !!nextFrame) {
          bonus +=
            currentFirstRoll === 10
              ? nextFrame[0] + nextFrame[1]
              : nextFrame[0];
        }

        return bonus + currentFrame.reduce((a, b) => a + b, points);
      },
      0,
    );
  }
}
