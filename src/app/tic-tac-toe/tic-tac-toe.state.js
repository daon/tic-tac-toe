'use strict';

export let state = {};

state.init = (view) => state.view = view;

state.game = (model) => {
    return model.gameOver === false
};

state.representation = (model) => {
    let representation = 'oops... something went wrong, the system is in a invalid state.';

    if (state.game(model)) {
        representation = state.view.game(model);
    }

    state.view.display(representation);
};

state.render = (model) => {
    state.representation(model)
};