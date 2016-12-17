'use strict';

let model = {
    players: 0,
    player1Checker: '',
    player2Checker: ''
};

model.init = (state) => model.state = state;

let state = {};


state.ready = (model) => {
    return model.players === 0;
}

state.checkers = (model) => {
    return model.players === 1 || model.players  === 2;
}

state.game = (model) => {
    return (model.player1Checker === 'X' && model.player2Checker === 'O') ||
     (model.player1Checker === 'O' && model.player2Checker === 'X');
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
