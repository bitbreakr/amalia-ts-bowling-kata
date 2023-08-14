# TS Bowling Game Kata

## Description

| /     | 1    | 2    | 3    | 4    | 5   | 6    | 7    | 8    | 9   | 10       |
| ----- | ---- | ---- | ---- | ---- | --- | ---- | ---- | ---- | --- | -------- |
| Rolls | 1, 4 | 4, 5 | 6, / | 5, / | X   | 0, 1 | 7, / | 6, / | X   | 2, / , 6 |
| Score | 5    | 14   | 29   | 49   | 60  | 61   | 77   | 97   | 117 | 133      |

A bowling game consists of 10 frames as shown above.

In each frame, the player has two opportunities to knock down 10 pins.

The score for the frame is the total number of pins knocked down, plus bonuses for strikes and spares.

A spare is when the player knocks down all 10 pins in two tries, represented by a `/` in the above table.
The bonus for that frame is the number of pins knocked down by the next roll.

A strike is when the player knocks down all 10 pins on his first try, represented by a `X` in the above table.
The bonus for that frame is the value of the next two balls rolled.

In the tenth frame a player who rolls a spare or strike is allowed to roll the extra balls to complete the frame.

However, no more than three balls can be rolled in tenth frame.

## Requirements

- Write a class named `BowlingGame` that has two methods

  - `roll(pins : int)` is called each time the player rolls a ball. The argument is the number of pins knocked down.
  - `score() : int` is called only at the very end of the game. It returns the total score for that game.

- Follow the TDD approach
  - Write a failing test: make it fail (red)
  - Write the minimum amount of code to make the test pass: make it work (green)
  - Refactor the code: make it clean (blue)

## Getting Started

```shell
git clone git@github.com:bitbreakr/ts-bowling-kata.git \
    && cd ts-bowling-kata \
    && yarn \
    && yarn test # starts jest in watch mode
```

## References

- [Bowling Game Kata](http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata)
