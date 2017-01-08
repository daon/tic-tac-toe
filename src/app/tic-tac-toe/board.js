import { isValidCellState, isChangeableCellState, getActiveCellState, EMPTY_CELL } from './cell';  

export const BOARD_SIZE = 3;
export const USER = 0;
export const COMPUTER = 1;
export const EMPTY_BOARD = [
    [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL],
    [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL],
    [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL]
];

export function isValidBoardState(state) {
    return Array.isArray(state) && 
        state.length === BOARD_SIZE &&
        state.every(row => Array.isArray(row) 
            && row.length === BOARD_SIZE
            && row.every(cellState => isValidCellState(cellState))); 
}

export function createBoard(state) {
    state = isValidBoardState(state) ? state : EMPTY_BOARD;

    return {
        getState: () => state.slice(),
        changeCellState: (row, col, newCellState) => {
            let cellState = state[row][col];
            if (!isChangeableCellState(cellState, newCellState)) {
                return false;
            }

            cellState = newCellState;
            
            let activeState = getActiveCellState(cellState);   
            for (var i = 0; i < BOARD_SIZE; i++) {
                // Three in a row
                if(state[i][0] === cellState && state[i][0] == state[i][1] && state[i][0] === state[i][2]) {
                    state[i][0] = activeState;
                    state[i][1] = activeState;
                    state[i][2] = activeState;
                // Three in a column
                } else if(state[0][i] === cellState && state[0][i] === state[1][i] && state[0][i] === state[2][i]) {
                    state[0][i] = activeState;
                    state[1][i] = activeState;
                    state[2][i] = activeState;
                // Three in a diagnoal
                } else if(state[0][i] === cellState && state[0][i] === state[1,1] && state[0][i] === state[2][2-i]) {
                    state[0][i] = activeState;
                    state[1][1] = activeState;
                    state[2][2-i] = activeState; 
                }
            }

            return true;
        } 
    };
}


// export function isEmptyCell(cell) { 
//      return  isCell(cell) && cell.getValue() === EMPTY;
// }

// export function isCheckedCell(cell) {
//     return isCell(cell) && (cell.getValue() === CROSS || cell.getValue() === NOUGHT);
// }

// export function countCheckers(board, checker) {
//     return board
//         .filter(cell => {
//             return cell.value === checker; 
//         })
//         .length;
// }

// export function isFullBoard(board) {
//     return board.every(cell => isCheckedCell(cell));
// }

// export function getCurrentPlayer(board) {
//     if (countCheckers(board, CROSS) === countCheckers(board, NOUGHT)) {
//         return USER;
//     } 
//     return COMPUTER;
// }

// export function getComputerChecker(board) {
//     let crosses = countCheckers(board, CROSS);
//     let noughts = countCheckers(board, NOUGHT);
//     if (crosses < noughts) {
//         return CROSS;
//     } else if (noughts < crosses) {
//         return NOUGHT;
//     }
//     return EMPTY;
// }

// export function getWinningPositions(board) {
//     return WINNING_POSITIONS
//         .filter(positions => {
//             return isCheckedCell(board[positions[0]]) && 
//             board[positions[0]].value === board[positions[1]].value &&
//             board[positions[0]].value === board[positions[2]].value;
//         })
//         .reduce((a, b) => a.concat(b), []);
// }

// export function isWinner(board, checker) {
//     let winningPositions = getWinningPositions(board);
//     if (winningPositions.length === 0) {
//         return false;
//     }
    
//     return board[winningPositions[0]].value === checker;
// }

// export function isLoser(board, checker) {
//     let winningPositions = getWinningPositions(board);
//     if (winningPositions.length === 0) {
//         return false;
//     }
    
//     return board[winningPositions[0]].value !== checker;
// }