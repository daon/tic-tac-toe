import { createCell, EMPTY, CROSS, NOUGHT } from './cell';  

export const BOARD_SIZE = 3;
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


export function isCell(cell) {
    return cell !== null && typeof cell === 'object' && 
        cell.hasOwnProperty('getValue') && 
        cell.hasOwnProperty('setValue') && 
        cell.hasOwnProperty('isActivated') &&
        cell.hasOwnProperty('activate');
}


export function createBoard(cells) {
    if (Array.isArray(cells) && cells.length === 9) {
        cells = cells.map(cell => {
            if(cell !== null && cell === 'object' && cell.hasOwnProperty('value')) {
                let activated = !!cell.activated;
                return createCell(cell.value, activated);
            }
            return createCell();
        });
    } else {
        cells = new Array(9).fill(createCell());
    }

    return {
        getCells: () => cells,
        isEmpty: () => cells.every(cell => cell.getValue() === EMPTY),
        setCellValue: (position, value) => {
            let cell = cells[position];
            if (!cell) {
                return false;
            }

            return cells[position].setValue(value);
        }
    };
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