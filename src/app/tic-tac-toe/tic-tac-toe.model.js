'use strict';

export let model = {
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
};
