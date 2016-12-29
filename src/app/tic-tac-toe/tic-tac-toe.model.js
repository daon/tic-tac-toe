'use strict';

export const BOARD_SIZE = 3;
export const EMPTY_CELL = '';
export const CHECKER_ONE = 'X';
export const CHECKER_TWO = 'O';
export const PLAYER_ONE = 0;
export const PLAYER_TWO = 1;
export const BOARD = Array(BOARD_SIZE*BOARD_SIZE).fill(EMPTY_CELL);
export const WINNING_POSITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 9],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 9],
    [0, 4, 9],
    [2, 4, 6]
];

export let model = {};

model.init = (state) => {
    model.state = state;
    model.board = BOARD.slice();
    model.currentPlayer = PLAYER_ONE;
    model.playerCheckers = [CHECKER_ONE, CHECKER_TWO];
    model.winningPositions = [];
    model.gameOver = false;
    model.draw = false;
} 

model.isCell = (position) => {
    return position >= 0 && position < model.board.length;
};

model.isEmptyCell = (position) => {
    return model.board[position] === EMPTY_CELL;
};

model.nextPlayer = () => {
    return model.currentPlayer ? PLAYER_ONE : PLAYER_TWO;
}

model.flatten = (a, b) => {
    return a.concat(b);
}

model.present = (data) => {
    if (model.state.playing(model)) {
        if (model.isCell(data.position) && model.isEmptyCell(data.position)) {
            model.board[data.position] = model.playerCheckers[model.currentPlayer];
            model.currentPlayer = model.nextPlayer();
        }

        model.winningPositions = WINNING_POSITIONS
            .filter(positions => {
                return model.board[positions[0]] !== EMPTY_CELL &&
                model.board[positions[0]] === model.board[positions[1]] &&
                model.board[positions[0]] === model.board[positions[2]];
            })
            .reduce(model.flatten, []);
    }

    model.state.render(model);
};