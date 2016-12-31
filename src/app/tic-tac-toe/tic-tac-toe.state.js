'use strict';
import { BOARD_SIZE, EMPTY_CELL, CHECKER_ONE, CHECKER_TWO } from './tic-tac-toe.model';

export let state = {};

state.init = (view) => state.view = view;

state.playing = (model) => {
    return model.winningPositions.length === 0 && model.board.some(cell => cell === EMPTY_CELL);
}

state.gameOver = (model) => {
    return model.winningPositions.length === BOARD_SIZE || (model.draw &&
    model.board.every(cell => cell !== EMPTY_CELL && (cell === CHECKER_ONE || cell === CHECKER_TWO)));
};

state.representation = (model) => {
    let representation = 'oops... something went wrong, the system is in a invalid state.';

    if (state.playing(model)) {
        representation = state.view.playing(model);
    }

    if (state.gameOver(model)) {
        representation = state.view.gameOver(model);
    }

    state.view.display(representation);
};

state.nextAction = (model) => {
    if (state.playing(model)) {

    }
};

state.render = (model) => {
    state.representation(model);
    state.nextAction(model);
};