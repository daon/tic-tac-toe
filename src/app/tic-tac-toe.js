'use strict';

export function createGame() {
    let board = Array(9).fill('');
    let currentPlatyer = 0;
    let checkers = ['X', 'O'];

    let isOnBoard = (pos) => {
        return pos >= 0 && pos < board.length;
    }

    let isEmptyCell = (pos) => {
        if (!isOnBoard(pos)) {
            return false;
        }

        return board[pos] === '';
    };

    return {
        getBoard: () => board,
        getCurrentPlayer: () => currentPlatyer + 1,
        placeChecker: (row, col) => {
            const pos = row * col;
            if (!isEmptyCell(pos)) {
                return false;
            }
            board[pos] = checkers[currentPlatyer];
            return true;
        }
    };
};