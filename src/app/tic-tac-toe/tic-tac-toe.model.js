'use strict';

export const BOARD_SIZE = 3;
export const EMPTY_CELL = '';
export const CHECKER_ONE = 'X';
export const CHECKER_TWO = 'O';
export const PLAYER_ONE = 0;
export const PLAYER_TWO = 1;

export let model = {
    cells: Array(BOARD_SIZE*BOARD_SIZE).fill(EMPTY_CELL),
    currentPlayer: PLAYER_ONE,
    playerCheckers: [CHECKER_ONE, CHECKER_TWO],
    gameOver: false
};

model.init = (state) => model.state = state;

model.isCell = (cell) => {
    return cell >= 0 && cell < model.cells.length;
};

model.isEmptyCell = (cell) => {
    return model.cells[cell] === EMPTY_CELL;
};

model.nextPlayer = () => {
    return model.currentPlayer ? PLAYER_ONE : PLAYER_TWO;
}

model.present = (data) => {
    if (model.state.game(model)) {
        if (model.isCell(data.cell) && model.isEmptyCell(data.cell)) {
            model.cells[data.cell] = model.playerCheckers[model.currentPlayer];
            model.currentPlayer = model.nextPlayer();
        }
    }

    model.state.render(model);
};