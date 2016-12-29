'use strict';

export let state = {};

state.init = (view) => state.view = view;

state.playing = (model) => {
    return model.draw === false;
};

state.draw = (model) => {
    return model.draw === true;
}

state.representation = (model) => {
    let representation = 'oops... something went wrong, the system is in a invalid state.';

    if (state.playing(model)) {
        representation = state.view.playing(model);
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