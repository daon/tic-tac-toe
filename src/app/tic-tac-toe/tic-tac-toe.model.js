'use strict';
import { createEmptyBoard, isEmptyCell, getComputerChecker, CROSS, NOUGHT } from './board';

export let model = {
    board: createEmptyBoard(),
    userChecker: null
};

model.init = (state) => model.state = state;

model.present = (data) => {
    data = data || {};
    if (model.state.ready(model)) {
        if (data.userChecker === CROSS || data.userChecker === NOUGHT) {
            model.userChecker = data.userChecker;
        }
    } else if (model.state.userPlaying(model)) {
        if (isEmptyCell(model.board, data.position)) {
            model.board[data.position] = model.userChecker;
        }
    } else if (model.state.computerPlaying(model)) {
        if (isEmptyCell(model.board, data.position)) {
            model.board[data.position] = getComputerChecker(model.board);
        }        
    } else if (model.state.winner(model) || model.state.loser(model) || model.state.tie(model)) {
        if (data.reseting) {
            model.board = createEmptyBoard();
            model.userChecker = null;
        }
    }
    model.state.render(model);
};