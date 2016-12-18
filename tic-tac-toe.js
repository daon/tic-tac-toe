'use strict';

let model = {
    players: 0,
    checkers: []
};

model.init = (state) => model.state = state;

model.present = (data) => {
    if (model.state.ready(model)) {
        model.players = data.players || 0;
    } else if (model.state.checkers(model)) {
        model.checkers = data.checkers || [];
    } else if (model.state.game(model)) {
        
    }

    model.state.render(model);
}

let actions = {};

actions.init = (present) => actions.present = present;

actions.setPlayers = (data, present) => {
    present = present || actions.present;
    data = data || {};
    data.players = data.players || 0;
    present(data);
    return false;
}

actions.setChecker = (data, present) => {
    present = present || actions.present;
    data = data || {};
    data.checkers = data.checkers || [];
    present(data);
    return false;
}

let view = {};

view.display = (representation) => {
    const screen = document.getElementById('screen');
    screen.innerHTML = representation;
}

view.init = (model) => view.ready(model);

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
}

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

let state = {};

state.init = (view) => state.view = view;

state.ready = (model) => {
    return model.players === 0;
}

state.checkers = (model) => {
    return model.players === 1 || model.players  === 2;
}

state.game = (model) => {
    return (model.checkers[0] === 'X' && model.checkers[1] === 'O') ||
     (model.checkers[0] === 'O' && model.checkers[1] === 'X');
}

state.representation = (model) => {
    var representation = 'oops... something went wrong, the system is in a invalid state.';

    if (state.ready(model)) {
        representation = state.view.ready(model);
    }

    if (state.checkers(model)) {
        representation = state.view.checkers(model);
    }

    if (state.game(model)) {
        representation = state.view.game(model);
    }
    
    return state.view.display(representation);
}

state.nextAction = (model) => {

}

state.render = (model) => {
    state.representation(model);
    state.nextAction(model);
}

state.init(view);
model.init(state);
actions.init(model.present);

view.display(view.init(model));