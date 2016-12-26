'use strict';
import { BOARD_SIZE } from './tic-tac-toe.model';

export let view = {};

view.init = (model) => view.game(model);

view.display = (representation) => {
    const app = document.getElementById('tic-tac-toe');
    app.innerHTML = representation;
};

view.game = (model) => {
    let representation = '';

    for (let i = 0; i < model.cells.length; i++) {
        if (i % BOARD_SIZE === 0) {
            representation += '<div class="row">';
        }
        representation += `<div class="cell" onclick="actions.placeChecker({ cell: ${i} })">${model.cells[i]}</div>`;
        
        if (i % BOARD_SIZE === (BOARD_SIZE - 1)) {
            representation += '</div>';
        }
    }
    return representation;
};