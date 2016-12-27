'use strict';

export const BOARD_SIZE = 3;
export const EMPTY_CELL = '';
export const CHECKER_ONE = 'X';
export const CHECKER_TWO = 'O';
export const PLAYER_ONE = 0;
export const PLAYER_TWO = 1;
export const DEFAULT_CELLS = Array(BOARD_SIZE*BOARD_SIZE).fill(EMPTY_CELL);


export let model = {
    cells: DEFAULT_CELLS.slice(),
    currentPlayer: PLAYER_ONE,
    playerCheckers: [CHECKER_ONE, CHECKER_TWO],
    gameOver: false
};

model.init = (state) => {
    model.state = state;
    model.cells = DEFAULT_CELLS.slice();
    model.currentPlayer = PLAYER_ONE;
    model.playerCheckers = [CHECKER_ONE, CHECKER_TWO];
    model.gameOver = false;
} 

model.isCell = (position) => {
    return position >= 0 && position < model.cells.length;
};

model.isEmptyCell = (position) => {
    return model.cells[position] === EMPTY_CELL;
};

model.nextPlayer = () => {
    return model.currentPlayer ? PLAYER_ONE : PLAYER_TWO;
}

model.present = (data) => {
    if (model.state.game(model)) {
        if (model.isCell(data.position) && model.isEmptyCell(data.position)) {
            model.cells[data.position] = model.playerCheckers[model.currentPlayer];
            model.currentPlayer = model.nextPlayer();
        }
    }

    model.state.render(model);
};