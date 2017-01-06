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

export function createCell() {
    let value = EMPTY;
    let oldValue = EMPTY;
    let highlighted = false;

    return { 
        getValue: () => value,
        setValue: (newValue) => {
            oldValue = value;
            value = newValue;
            return value;
        },
        isValue: (otherValue) => value === otherValue,
        getOldValue: () => oldValue,
        isHighlighted: () => highlighted,
        toggleHighlight: () =>  highlighted = !highlighted
     };
}

export function createBoard() {
    let cells = new Array(BOARD_SIZE*BOARD_SIZE).fill(createCell());

    return {
        getCells: () => cells,
        isEmpty: () => cells.each(cell => cell.isValue(EMPTY))
    };
}

export function isCell(cell) {
    return cell !== null && typeof cell === 'object' && 
        cell.hasOwnProperty('getValue') && 
        cell.hasOwnProperty('setValue') && 
        cell.hasOwnProperty('getOldValue') &&
        cell.hasOwnProperty('isHighlighted') &&
        cell.hasOwnProperty('toggleHighlight');
}

export function isEmptyCell(cell) { 
     return  isCell(cell) && cell.getValue() === EMPTY;
}

export function isCheckedCell(cell) {
    return isCell(cell) && (cell.getValue() === CROSS || cell.getValue() === NOUGHT);
}

export function countCheckers(board, checker) {
    return board
        .filter(cell => {
            return cell.value === checker; 
        })
        .length;
}

export function isFullBoard(board) {
    return board.every(cell => isCheckedCell(cell));
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
            return isCheckedCell(board[positions[0]]) && 
            board[positions[0]].value === board[positions[1]].value &&
            board[positions[0]].value === board[positions[2]].value;
        })
        .reduce((a, b) => a.concat(b), []);
}

export function isWinner(board, checker) {
    let winningPositions = getWinningPositions(board);
    if (winningPositions.length === 0) {
        return false;
    }
    
    return board[winningPositions[0]].value === checker;
}

export function isLoser(board, checker) {
    let winningPositions = getWinningPositions(board);
    if (winningPositions.length === 0) {
        return false;
    }
    
    return board[winningPositions[0]].value !== checker;
}