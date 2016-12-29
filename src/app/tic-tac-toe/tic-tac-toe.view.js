'use strict';
import { BOARD_SIZE } from './tic-tac-toe.model';

export let view = {};

view.init = (model) => view.playing(model);

view.display = (representation) => {
    const app = document.getElementById('tic-tac-toe');
    app.innerHTML = representation;
};

view.playing = (model) => {
    let player = model.currentPlayer ?  'Player 2' : 'Player 1';

    let representation = `<div class="player">${player} Go Go!</div>`;
    for (let i = 0; i < model.board.length; i++) {
        if (i % BOARD_SIZE === 0) {
            representation += '<div class="row">';
        }

        let cellClasses = model.winningPositions.some(position => position === i) ? 'cell active' : 'cell';
        representation += `<div class="${cellClasses}" onclick="actions.placeChecker({ position: ${i} })">${model.board[i]}</div>`;
        
        if (i % BOARD_SIZE === (BOARD_SIZE - 1)) {
            representation += '</div>';
        }
    }
    return representation;
};

view.draw = (model) => {
    let player = model.currentPlayer ?  'Player 2' : 'Player 1';

    let representation = `<div class="player">${player} Go Go!</div>`;
    for (let i = 0; i < model.board.length; i++) {
        if (i % BOARD_SIZE === 0) {
            representation += '<div class="row">';
        }
        representation += `<div class="cell" onclick="actions.placeChecker({ position: ${i} })">${model.board[i]}</div>`;
        
        if (i % BOARD_SIZE === (BOARD_SIZE - 1)) {
            representation += '</div>';
        }
    }
    return representation;
    
};
