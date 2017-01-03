'use strict';

export const BOARD_SIZE = 3;
export const EMPTY = '';
export const CROSS = 'X';
export const NOUGHT = 'O';
export const USER = 0;
export const COMPUTER = 1;
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

export function createEmptyBoard() {
    return new Array(BOARD_SIZE*BOARD_SIZE).fill(EMPTY);
}

export function isCell(board, position) {
    return  position >= 0 && position < board.length; 
}

export let model = {
    board: createEmptyBoard(),
    userChecker: CROSS
};

model.init = (state) => model.state = state;

model.isEmptyCell = (position) =>  {
    return isCell(model.board, position) && model.board[position] === EMPTY;
}

model.countCheckers = (checker) => {
    return model.board
        .filter(cell => cell === checker)
        .length;
}

model.getCurrentPlayer = () => {
    if (model.countCheckers(CROSS) === model.countCheckers(NOUGHT)) {
        return USER;
    } 
    return COMPUTER;
}

model.getComputerChecker = () => {
    if (model.countCheckers(CROSS) < model.countCheckers(NOUGHT)) {
        return CROSS;
    } 
    return NOUGHT;
}

model.isWinner = () => {
    return false;
}

model.isLoser = () => {
    return false;
}

model.isDraw = () => {
    return model.board.every(cell => cell !== EMPTY && (cell === CROSS || cell === NOUGHT));
}

model.present = (data) => {
    if (model.state.userPlaying(model)) {
        data = data || {};
        if (model.isEmptyCell(data.position)) {
            model.board[data.position] = model.userChecker;
        }
    } else if (model.state.computerPlaying(model)) {
        data = data || {};
        if (model.isEmptyCell(data.position)) {
            model.board[data.position] = model.getComputerChecker();
        }        
    } else if (model.state.gameOver(model)) {
        if (data.reseting) {
            model.init();
        }
    }
    console.log(model);
    model.state.render(model);
};