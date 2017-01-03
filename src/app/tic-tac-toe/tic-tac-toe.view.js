'use strict';
import { BOARD_SIZE, CROSS, NOUGHT } from './board';

export let view = {};

view.init = (model) => view.ready(model);

view.display = (representation) => {
    const app = document.getElementById('tic-tac-toe');
    app.innerHTML = representation;
};

view.ready = (model) => {
    let representation = `
        <button type="button" class="btn" onclick="actions.setUserChecker({ userChecker: '${CROSS}' })">${CROSS}</button>
        <span>or</span>
        <button type="button" class="btn" onclick="actions.setUserChecker({ userChecker: '${NOUGHT}' })">${NOUGHT}</button>
    `;

    return representation;
}

view.userPlaying = (model) => {
    let representation = `<div class="player">Your turn!</div>`;
    for (let i = 0; i < model.board.length; i++) {
        if (i % BOARD_SIZE === 0) {
            representation += '<div class="row">';
        }

        representation += `<div class="cell" onclick="actions.userMove({ position: ${i} })">${model.board[i]}</div>`;
        
        if (i % BOARD_SIZE === (BOARD_SIZE - 1)) {
            representation += '</div>';
        }
    }
    return representation;
};

view.computerPlaying = (model) => {
    let representation = `<div class="player">Computers turn!</div>`;
    for (let i = 0; i < model.board.length; i++) {
        if (i % BOARD_SIZE === 0) {
            representation += '<div class="row">';
        }

        representation += `<div class="cell">${model.board[i]}</div>`;
        
        if (i % BOARD_SIZE === (BOARD_SIZE - 1)) {
            representation += '</div>';
        }
    }
    return representation;
};

view.winner = (model) => {
    let representation = `<div class="player">You won!!</div>`;
    return representation;
    
};

view.loser = (model) => {
    let representation = `<div class="player">Loser!!!</div>`;
    return representation;
    
};

view.draw = (model) => {
    let representation = `<div class="player">It was a draw</div>`;
    return representation;  
};
