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
have three different states:

1. Empty
2. Cross
3. Nought

Here is an example of how to set the board state of
a game:

```javascript
import { gameFactory, EMPTY, CROSS, NOUGHT } from './gameFactory';

const board = [
    EMPTY, CROSS, EMPTY,
    NOUGHT, NOUGHT, EMPTY,
    EMPTY, EMPTY, CROSS
];

var game = createGame(board);

```
