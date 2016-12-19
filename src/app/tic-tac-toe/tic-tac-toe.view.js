'use strict';

export let view = {};

view.init = (model) => view.ready(model);

view.display = (representation) => {
    const screen = document.getElementById('screen');
    screen.innerHTML = representation;
};

view.ready = (model) => {
    return `
        <button type="button" class="btn" onclick="actions.setPlayers({ players: 1 })">one player</button>
        <br/>or<br/>
        <button type="button" class="btn" onclick="actions.setPlayers({ players: 2 })">two players</button>
    `;
};

view.checkers = (model) => {
    return `
        <button type="button" class="btn" onclick="actions.setChecker({ checkers: ['X', 'O'] })">X</button>
        <span>or</span>
        <button type="button" class="btn" onclick="actions.setChecker({ checkers: ['O', 'X'] })">O</button>  
    `;
};

view.game = (model) => {
    return `
        <div class="row">
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
        </div>    
        <div class="row">
            <div class="cell"></div>
            <div class="cell">X</div>
            <div class="cell"></div>
        </div>    
        <div class="row">
            <div class="cell">O</div>
            <div class="cell"></div>
            <div class="cell"></div>
        </div>
    `;
};