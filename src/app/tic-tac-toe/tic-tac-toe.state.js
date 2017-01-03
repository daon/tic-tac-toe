'use strict';
import { computer } from './randomPositionComputer';
import { actions } from './tic-tac-toe.actions';
import { USER, COMPUTER, CROSS, NOUGHT } from './tic-tac-toe.model';

export let state = {};

state.init = (view) => state.view = view;

state.userPlaying = (model) => {
    return model.getCurrentPlayer() === USER && 
    (model.userChecker === CROSS || model.userChecker === NOUGHT) &&
    model.isWinner() === false && model.isLoser() === false && model.isDraw() === false; 
}

state.computerPlaying = (model) => {
    return model.getCurrentPlayer() === COMPUTER &&
        (model.userChecker === CROSS || model.userChecker === NOUGHT) &&    
        model.getComputerChecker() !== model.userChecker &&
        (model.getComputerChecker() === CROSS || model.getComputerChecker() === NOUGHT) && 
        model.isWinner() === false && model.isLoser() === false && model.isDraw() === false;
}

state.winner = (model) => {
    return model.isWinner() === true && model.isLoser() === false && model.isDraw() === false;
}

state.loser = (model) => {
    return model.isWinner() === false && model.isLoser() === true && model.isDraw() === false;    
}

state.draw = (model) => {
    return model.isWinner() === false && model.isLoser() === false && model.isDraw() === true;        
}

state.representation = (model) => {
    let representation = 'oops... something went wrong, the system is in a invalid state.';

    if (state.userPlaying(model)) {
        representation = state.view.userPlaying(model);
    }

    if (state.computerPlaying(model)) {
        representation = state.view.computerPlaying(model);
    }

    if (state.winner(model)) {
        representation = state.view.winner(model);
    }

    if (state.loser(model)) {
        representation = state.view.loser(model);
    }

    if (state.draw(model)) {
        representation = state.view.draw(model);
    }

    state.view.display(representation);
};

state.nextAction = (model) => {
    if (state.computerPlaying(model)) {
        actions.computerMove(computer.getMove(model), model.present);
    }
};

state.render = (model) => {
    state.representation(model);
    state.nextAction(model);
};