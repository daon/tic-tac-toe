'use strict';

export function createGame() {
    const EMPTY_CELL = '';
    const PLAYER_ONE = 0;
    const PLAYER_TWO = 1;
    const CHECKER_ONE = 'X';
    const CHECKER_TWO = 'O'
    const BOARD_SIZE = 9;

    let board = Array(BOARD_SIZE).fill(EMPTY_CELL);
    let currentPlayer = PLAYER_ONE;
    let playerCheckers = [CHECKER_ONE, CHECKER_TWO];

    let getPosition = (row, column) => {
        return (row * 3) + column;
    }

    let isOnBoard = (position) => {
        return position >= 0 && position < board.length;
    }

    let isEmptyCell = (position) => {
        return board[position] === EMPTY_CELL;
    };

    let getPlayerName = (player) => {
        return player + 1;
    }
    
    let nextPlayer = () => {
        return currentPlayer ? PLAYER_ONE : PLAYER_TWO
    }

    let threeInARow = (row, checker) => {
        return board[getPosition(row, 0)] === checker &&
            board[getPosition(row, 1)] === checker &&
            board[getPosition(row, 2)] === checker;
    }

    return {
        getBoard: () => board,
        getCurrentPlayer: () => getPlayerName(currentPlayer),
        placeChecker: (row, column) => {
            const position = getPosition(row, column);

            if (!isOnBoard(position) || !isEmptyCell(position)) {
                return false;
            }
            
            board[position] = playerCheckers[currentPlayer];
            currentPlayer = nextPlayer();
            return true;
        },
        getWinner: () => {
            if (threeInARow(0, playerCheckers[PLAYER_ONE]) || 
            threeInARow(1, playerCheckers[PLAYER_ONE]) ||
            threeInARow(2, playerCheckers[PLAYER_ONE])) {
                return getPlayerName(PLAYER_ONE);
            }

            return null;
        }
    };
};