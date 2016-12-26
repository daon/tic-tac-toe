'use strict';

export const BOARD_SIZE = 9;
export const EMPTY_CELL = '';
export const PLAYER_ONE = 0;
export const PLAYER_TWO = 1;
export const CHECKER_ONE = 'X';
export const CHECKER_TWO = 'O';

function getPosition(row, column) {
    return (row * 3) + column;
}

function isOnBoard(board, position) {
    return position >= 0 && position < board.length;
}

function isEmptyCell(board, position) {
    return board[position] === EMPTY_CELL;
}

function nextPlayer(currentPlayer) {
    return currentPlayer ? PLAYER_ONE : PLAYER_TWO
}

function threeInARow(board, checker) {
    for (let row = 0; row < 3; row++) {
        if(board[getPosition(row, 0)] === checker &&
            board[getPosition(row, 1)] === checker &&
            board[getPosition(row, 2)] === checker) {
            return true;
        }
    }

    return false;
}

function threeInAColumn(board, checker) {

    for (let column = 0; column < 3; column++) {
        if(board[getPosition(0, column)] === checker &&
            board[getPosition(1, column)] === checker &&
            board[getPosition(2, column)] === checker) {
            return true;
        }
    }

    return false;
}

function threeInADiagnoal(board, checker) {
    return (board[getPosition(0, 0)] === checker &&
            board[getPosition(1, 1)] === checker &&
            board[getPosition(2, 2)] === checker) ||
            (board[getPosition(0, 2)] === checker &&
            board[getPosition(1, 1)] === checker &&
            board[getPosition(2, 0)] === checker); 
}

function isWinner(board, checker) {
    return threeInARow(board, checker) || 
    threeInAColumn(board, checker) || 
    threeInADiagnoal(board, checker);
}

export function createGame() {
    let board = Array(BOARD_SIZE).fill(EMPTY_CELL);
    let currentPlayer = PLAYER_ONE;
    let playerCheckers = [CHECKER_ONE, CHECKER_TWO];

    return {
        getBoard: () => board,
        getCurrentPlayer: () => currentPlayer,
        placeChecker: (row, column) => {
            const previousPlayer = nextPlayer(currentPlayer);

            if (isWinner(board, playerCheckers[previousPlayer])) {
                return false;
            }

            const position = getPosition(row, column);
            
            if (!isOnBoard(board, position) || !isEmptyCell(board, position)) {
                return false;
            }
            
            board[position] = playerCheckers[currentPlayer];
            currentPlayer = nextPlayer(currentPlayer);
            return true;
        },
        getWinner: () => {
            if (isWinner(board, playerCheckers[PLAYER_ONE])) {
                return PLAYER_ONE;
            }

            if (isWinner(board, playerCheckers[PLAYER_TWO])) {
                return PLAYER_TWO;
            }

            return null;
        }
    };
}