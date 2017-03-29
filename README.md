
# Tic Tac Toe
[![Build Status](https://travis-ci.org/daon/tic-tac-toe.svg?branch=master)](https://travis-ci.org/daon/tic-tac-toe)

## User Stories
1. I can play a game of Tic Tac Toe with the computer.
2. My game will reset as soon as it's over so I can play again.
3. I can choose whether I want to play as X or O.

# Game Factory

To create a game, call the createGame function
without any arguments:

```javascript
import { createGame } from './gameFactory';

const game = createGame();

```

The game factory also take an argument of a board
state. The board state is represented by an array
of nine values of different cell states. A cell can
have three different states (state value in parentheses):

1. Empty    `(0)`
2. Cross    `(1)`
3. Nought   `(2)`

Here is an example of how to set the board state of
a game:

```javascript
import { createGame, EMPTY, CROSS, NOUGHT } from './gameFactory';

const board = [
    EMPTY, CROSS, EMPTY,
    NOUGHT, NOUGHT, EMPTY,
    EMPTY, EMPTY, CROSS
];

const game = createGame(board);

```

# Game Object

The game object has the following methods:

- `getBoard()` - Returns the board state for the game
- `getAvailableMoves()` - Returns empty board positions for the game
- `getActiveTurn()` - Returns current player turn, cross or nought
- `isWinner(player)` - Returns true if the argument `player` (CROSS or NOUGHT) is the winner else it returns false

## Example: `getBoard()`

```javascript
import { createGame, EMPTY, CROSS, NOUGHT } from './gameFactory';

const board = [
    EMPTY, CROSS, EMPTY,
    NOUGHT, NOUGHT, EMPTY,
    EMPTY, EMPTY, CROSS
];

const game = createGame(board);
const board = game.getBoard();

console.log(board);
// -> [0, 1, 0, 2, 2, 0, 0, 0, 1]
```

## Example: `getAvailableMoves()`

```javascript
import { createGame, EMPTY, CROSS, NOUGHT } from './gameFactory';

const board = [
    EMPTY, CROSS, EMPTY,
    NOUGHT, NOUGHT, EMPTY,
    EMPTY, EMPTY, CROSS
];

const game = createGame(board);
const availableMoves = game.getAvailableMoves();

console.log(availableMoves);
// -> [0, 2, 5, 6, 7]
```
## Example: `getActiveTurn()`

```javascript
import { createGame, EMPTY, CROSS, NOUGHT } from './gameFactory';

const board = [
    EMPTY, CROSS, EMPTY,
    NOUGHT, NOUGHT, CROSS,
    EMPTY, EMPTY, CROSS
];

const game = createGame(board);
const activeTurn = game.getActiveTurn();

console.log(activeTurn);
// -> 2
```

## Example: `isWinner(player)`

```javascript
import { createGame, EMPTY, CROSS, NOUGHT } from './gameFactory';

const board = [
    EMPTY, EMPTY, CROSS,
    NOUGHT, NOUGHT, CROSS,
    EMPTY, EMPTY, CROSS
];

const game = createGame(board);
const isCrossWinner = game.isWinner(CROSS);

console.log(isCrossWinner);
// -> true
```