'use strict';

const EMPTY_CELL = '';
const PLAYER_ONE = 0;
const PLAYER_TWO = 1;

function getPosition(row, column) {
    return (row * 3) + column;
}

function isOnBoard(board, position) {
    return position >= 0 && position < board.length;
}

function isEmptyCell(board, position) {
    return board[position] === EMPTY_CELL;
};

function getPlayerName(player) {
    return player + 1;
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
            board[getPosition(1, 4)] === checker &&
            board[getPosition(2, 8)] === checker) ||
            (board[getPosition(0, 2)] === checker &&
            board[getPosition(1, 4)] === checker &&
            board[getPosition(2, 6)] === checker); 
}

export function createGame() {
    const CHECKER_ONE = 'X';
    const CHECKER_TWO = 'O'
    const BOARD_SIZE = 9;

    let board = Array(BOARD_SIZE).fill(EMPTY_CELL);
    let currentPlayer = PLAYER_ONE;
    let playerCheckers = [CHECKER_ONE, CHECKER_TWO];

    return {
        getBoard: () => board,
        getCurrentPlayer: () => getPlayerName(currentPlayer),
        placeChecker: (row, column) => {
            const position = getPosition(row, column);

            if (!isOnBoard(board, position) || !isEmptyCell(board, position)) {
                return false;
            }
            
            board[position] = playerCheckers[currentPlayer];
            currentPlayer = nextPlayer(currentPlayer);
            return true;
        },
        getWinner: () => {
            if (threeInARow(board, playerCheckers[PLAYER_ONE])) {
                return getPlayerName(PLAYER_ONE);
            }

            if (threeInAColumn(board, playerCheckers[PLAYER_ONE])) {
                return getPlayerName(PLAYER_ONE);
            }

            if (threeInADiagnoal(board, playerCheckers[PLAYER_ONE])) {
                return getPlayerName(PLAYER_ONE);
            }

            return null;
        }
    };
};