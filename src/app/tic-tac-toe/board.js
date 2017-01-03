export const BOARD_SIZE = 3;
export const EMPTY = '';
export const CROSS = 'X';
export const NOUGHT = 'O';
export const USER = 0;
export const COMPUTER = 1;
export const WINNING_POSITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

export function createEmptyBoard() {
    return new Array(BOARD_SIZE*BOARD_SIZE).fill(EMPTY);
}

export function isEmptyCell(board, position) {
     return board[position] === EMPTY;
}

export function isCheckedCell(board, position) {
    return board[position] === CROSS || board[position] === NOUGHT;
}

export function countCheckers(board, checker) {
    return board
        .filter(cell => cell === checker)
        .length;
}

export function isFullBoard(board) {
    return board.every((checker, position) => isCheckedCell(board, position));
}

export function getCurrentPlayer(board) {
    if (countCheckers(board, CROSS) === countCheckers(board, NOUGHT)) {
        return USER;
    } 
    return COMPUTER;
}

export function getComputerChecker(board) {
    let crosses = countCheckers(board, CROSS);
    let noughts = countCheckers(board, NOUGHT);
    if (crosses < noughts) {
        return CROSS;
    } else if (noughts < crosses) {
        return NOUGHT;
    }
    return EMPTY;
}

export function getWinningPositions(board) {
    return WINNING_POSITIONS
        .filter(positions => {
            return isCheckedCell(board, positions[0]) && 
            board[positions[0]] === board[positions[1]] &&
            board[positions[0]] === board[positions[2]];
        })
        .reduce((a, b) => a.concat(b), []);
}

export function isWinner(board, checker) {
    let winningPositions = getWinningPositions(board);
    if (winningPositions.length === 0) {
        return false;
    }
    
    return board[winningPositions[0]] === checker;
}

export function isLoser(board, checker) {
    let winningPositions = getWinningPositions(board);
    if (winningPositions.length === 0) {
        return false;
    }
    
    return board[winningPositions[0]] !== checker;
}