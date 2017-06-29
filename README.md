
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

1. _    `(0)` - Empty
2. X    `(1)` - Cross
3. O    `(2)` - Nought

Here is an example of how to set the board state of
a game:

```javascript
import { createGame, _, X, O } from './gameFactory';

const board = [
    _, X, _,
    O, O, _,
    _, _, X
];

const game = createGame(board);

```

# Game Object

The game object has the following methods:

- `getBoard()` - Returns the board state for the game
- `getAvailableMoves()` - Returns empty (_) board positions for the game
- `getActiveTurn()` - Returns current player turn, X or O
- `isWinner(player)` - Returns true if the argument `player` (X or O) is the winner else it returns false
- `getNewState(move)` - Returns new game state after player move.

## Example: `getBoard()`

```javascript
import { createGame, _, X, O } from './gameFactory';

const board = [
    _, X, _,
    O, O, _,
    _, _, X
];

const game = createGame(board);
const board = game.getBoard();

console.log(board);
// -> [0, 1, 0, 2, 2, 0, 0, 0, 1]
```

## Example: `getAvailableMoves()`

```javascript
import { createGame, _, X, O } from './gameFactory';

const board = [
    _, X, _,
    O, O, _,
    _, _, X
];

const game = createGame(board);
const availableMoves = game.getAvailableMoves();

console.log(availableMoves);
// -> [0, 2, 5, 6, 7]
```
## Example: `getActiveTurn()`

```javascript
import { createGame, _, X, O } from './gameFactory';

const board = [
    _, X, _,
    O, O, X,
    _, _, X
];

const game = createGame(board);
const activeTurn = game.getActiveTurn();

console.log(activeTurn);
// -> 2
```

## Example: `isWinner(player)`

```javascript
import { createGame, _, X, O } from './gameFactory';

const board = [
    _, _, X,
    O, O, X,
    _, _, X
];

const game = createGame(board);
const isXWinner = game.isWinner(X);

console.log(isXWinner);
// -> true
```

## Example: `getNewState(move)`

```javascript
import { createGame, _, X, O } from './gameFactory';

const board = [
    _, X, X,
    O, O, _,
    _, _, X
];

const game = createGame(board);
const newGameState = game.getNewState(5);

console.log(game.getBoard());
console.log(newGameState.getBoard());
console.log(game.getAvailableMoves());
console.log(newGameState.getAvailableMoves());
console.log(game.getActiveTurn());
console.log(newGameState.getActiveTurn());
console.log(game.isWinner(X));
console.log(newGameState.isWinner(X));
console.log(game.isWinner(O));
console.log(newGameState.isWinner(O));
// -> [0, 1, 1, 2, 2, 0, 0, 0, 1]
// -> [0, 1, 1, 2, 2, 2, 0, 0, 1]
// -> [0, 5, 6, 7]
// -> [0, 6, 7]
// -> 2
// -> 0
// -> false
// -> false
// -> false
// -> true
```