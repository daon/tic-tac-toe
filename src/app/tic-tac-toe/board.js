export const BOARD_SIZE = 3;
export const EMPTY = '';
export const CROSS = 'X';
export const NOUGHT = 'O';
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

export function createBoard(currentChecker) {
    let board = {};
    let cells = new Array(BOARD_SIZE*BOARD_SIZE).fill(EMPTY);
    let winningPositions = [];

    if (currentChecker !== CROSS && currentChecker !== NOUGHT) {
        currentChecker = CROSS;
    }

    board.getCells = () => cells.splice();

    board.getCurrentChecker = () => currentChecker;

    board.isCell = (position) => position >= 0 && position < cells.length;

    board.isEmptyCell = (position) => cells[position] === EMPTY;

    board.hasWinningPositions = () => winningPositions.length > 0;

    board.isFull = () => cells
        .every(cell => cell !== EMPTY && (cell === CROSS || cell === NOUGHT));

    board.getWinningPositions = () => {
        if (!board.hasWinningPositions()) {
         winningPositions = WINNING_POSITIONS
            .filter(positions => {
                return cells[positions[0]] !== EMPTY &&
                cells[positions[0]] === cells[positions[1]] &&
                cells[positions[0]] === cells[positions[2]];
            })
            .reduce((a, b) => a.concat(b), []);
        }

        return winningPositions.splice();
    }

    board.placeChecker = (position,) => {
        if(!board.isCell(position) || !board.isEmptyCell(position) || board.isFull() || board.hasWinningPositions()) {
            return false;
        }

        cells[position] = currentChecker;
        currentChecker = currentChecker === CROSS ? NOUGHT : CROSS;
        return true;
    }

    return board;
}