export const BOARD_SIZE = 3;
export const EMPTY_CELL = '';
export const CHECKER_ONE = 'X';
export const CHECKER_TWO = 'O';

export function createBoard() {
    let board = {};
    let cells = new Array(BOARD_SIZE*BOARD_SIZE).fill(EMPTY_CELL);

    board.getCells = () => cells.splice();

    board.isCell = (position) => position >= 0 && position < cells.length;

    board.isEmptyCell = (position) => cells[position] === EMPTY_CELL;

    board.isFull = () => cells
        .every(cell => cell !== EMPTY_CELL && (cell === CHECKER_ONE || cell === CHECKER_TWO));

    return board;
}