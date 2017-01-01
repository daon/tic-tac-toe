'use strict';
import { createBoard } from './tic-tac-toe.board';

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

let isCell = (board, position) => {
    return position >= 0 && position < board.length;
};

let isEmptyCell = (board, position) => {
    return board[position] === EMPTY_CELL;
};

let isFullBoard = (board) => {
    return board.every(cell => cell !== EMPTY_CELL && (cell === CHECKER_ONE || cell === CHECKER_TWO));
};

let flatten = (a, b) => {
    return a.concat(b);
};

let getWinningPositions = (board) => {
    return WINNING_POSITIONS
            .filter(positions => {
                return board[positions[0]] !== EMPTY_CELL &&
                board[positions[0]] === board[positions[1]] &&
                board[positions[0]] === board[positions[2]];
            })
            .reduce(flatten, []);
};

let nextPlayer = (currentPlayer) => {
    return currentPlayer ? PLAYER_ONE : PLAYER_TWO;
};

let randomPosition = (board) => {
    return Math.floor((Math.random() * board.length));
};

let currentBestPosition = (board) => {

};

let choosePosition = (board) => {
    if (board.every(cell => cell === EMPTY_CELL)) {
        return randomPosition(board);
    }

    if (board.filter(cell => cell === EMPTY_CELL).length === 1) {
        return board.indexOf(EMPTY_CELL);
    }

    return currentBestPosition(board);
}

export let model = {};

model.init = (state) => {
    model.state = state || model.state;
    model.board = BOARD.slice();
    model.currentPlayer = PLAYER_ONE;
    model.computer = PLAYER_TWO;
    model.playerCheckers = [CHECKER_ONE, CHECKER_TWO];
    model.winningPositions = [];
    model.draw = false;
} 

model.present = (data) => {
    if (model.state.playing(model)) {
        if (isCell(model.board, data.position) && isEmptyCell(model.board, data.position)) {
            model.board[data.position] = model.playerCheckers[model.currentPlayer];
        }

        model.winningPositions = getWinningPositions(model.board);

        model.draw = isFullBoard(model.board); 

        model.currentPlayer = nextPlayer(model.currentPlayer);
    } else if (model.state.gameOver(model)) {
        if (data.reseting) {
            model.init();
        }
    }

    model.state.render(model);
};