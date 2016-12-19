'use strict';

export let state = {};

state.init = (view) => state.view = view;

state.ready = (model) => {
    return model.players === 0;
};

state.checkers = (model) => {
    return model.players === 1 || model.players  === 2;
};

state.game = (model) => {
    return (model.checkers[0] === 'X' && model.checkers[1] === 'O') ||
     (model.checkers[0] === 'O' && model.checkers[1] === 'X');
};

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
};

state.render = (model) => {
    state.representation(model);
};