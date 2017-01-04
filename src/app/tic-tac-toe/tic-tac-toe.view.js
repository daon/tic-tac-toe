'use strict';
import { BOARD_SIZE, CROSS, NOUGHT, getWinningPositions } from './board';

export let view = {};

view.init = (model) => view.ready(model);

view.display = (representation) => {
    const app = document.getElementById('tic-tac-toe');
    app.innerHTML = representation;
};

view.ready = (model) => {
    let representation = `
        <p>What checker would you like to use?</p>
        <button type="button" class="btn" onclick="actions.setUserChecker({ userChecker: '${CROSS}' })">${CROSS}</button>
        <span>or</span>
        <button type="button" class="btn" onclick="actions.setUserChecker({ userChecker: '${NOUGHT}' })">${NOUGHT}</button>
    `;

    return representation;
}

view.userPlaying = (model) => {
    let representation = `<div class="label label-player">Your turn!</div>`;
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
    let representation = `<div class="label label-player">Computers turn!</div>`;
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
    let winningPositions = getWinningPositions(model.board);
    let representation = `<div class="label label-winner">You won!!</div>`;
    for (let i = 0; i < model.board.length; i++) {
        if (i % BOARD_SIZE === 0) {
            representation += '<div class="row">';
        }

        let cellClasses = winningPositions.some(position => position === i) ? 'cell highlighted' : 'cell';
        representation += `<div class="${cellClasses}">${model.board[i]}</div>`;
        
        if (i % BOARD_SIZE === (BOARD_SIZE - 1)) {
            representation += '</div>';
        }
    }
    return representation;
    
};

view.loser = (model) => {
    let winningPositions = getWinningPositions(model.board);
    let representation = `<div class="label label-loser">Loser!!!</div>`;
    for (let i = 0; i < model.board.length; i++) {
        if (i % BOARD_SIZE === 0) {
            representation += '<div class="row">';
        }
        let cellClasses = winningPositions.some(position => position === i) ? 'cell highlighted' : 'cell';
        representation += `<div class="${cellClasses}">${model.board[i]}</div>`;
        
        if (i % BOARD_SIZE === (BOARD_SIZE - 1)) {
            representation += '</div>';
        }
    }
    return representation;
};

view.tie = (model) => {
    let representation = `<div class="label label-tie">It was a tie!</div>`;
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
