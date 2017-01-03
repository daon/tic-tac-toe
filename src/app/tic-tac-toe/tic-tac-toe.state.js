'use strict';
import { isFullBoard, getCurrentPlayer, getComputerChecker, isWinner, isLoser, CROSS, NOUGHT, USER, COMPUTER } from './board';
import { getNextComputerMove } from './randomPositionComputer';
import { actions } from './tic-tac-toe.actions';

export let state = {};

state.init = (view) => state.view = view;

state.ready = (model) => {
    return model.userChecker !== CROSS && model.userChecker !== NOUGHT;
}

state.userPlaying = (model) => {
    return getCurrentPlayer(model.board) === USER && 
    (model.userChecker === CROSS || model.userChecker === NOUGHT) &&
    isWinner(model.board, model.userChecker) === false && 
    isLoser(model.board, model.userChecker) === false && 
    isFullBoard(model.board) === false; 
}

state.computerPlaying = (model) => {
    return getCurrentPlayer(model.board) === COMPUTER &&
        (model.userChecker === CROSS || model.userChecker === NOUGHT) &&    
        getComputerChecker(model.board) !== model.userChecker &&
        (getComputerChecker(model.board) === CROSS || getComputerChecker(model.board) === NOUGHT) && 
        isWinner(model.board, model.userChecker) === false && 
        isLoser(model.board, model.userChecker) === false && 
        isFullBoard(model.board) === false; 
}

state.winner = (model) => {
    return  isWinner(model.board, model.userChecker) === true && 
        isLoser(model.board, model.userChecker) === false; 
}

state.loser = (model) => {
    return  isWinner(model.board, model.userChecker) === false && 
        isLoser(model.board, model.userChecker) === true;
}

state.draw = (model) => {
    return  isWinner(model.board, model.userChecker) === false && 
        isLoser(model.board, model.userChecker) === false && 
        isFullBoard(model.board) === true; 
}

state.representation = (model) => {
    let representation = 'oops... something went wrong, the system is in a invalid state.';

    if (state.ready(model)) {
        console.log('state: ready');
        representation = state.view.ready(model);
    }

    if (state.userPlaying(model)) {
        console.log('state: userPlaying');
        representation = state.view.userPlaying(model);
    }

    if (state.computerPlaying(model)) {
        console.log('state: computerPlaying');
        representation = state.view.computerPlaying(model);
    }

    if (state.winner(model)) {
        console.log('state: winner');
        representation = state.view.winner(model);
    }

    if (state.loser(model)) {
        console.log('state: loser');
        representation = state.view.loser(model);
    }

    if (state.draw(model)) {
        console.log('state: draw');
        representation = state.view.draw(model);
    }

    state.view.display(representation);
};

state.nextAction = (model) => {
    if (state.computerPlaying(model)) {
        actions.computerMove(getNextComputerMove(model.board), model.present);
    }

    if (state.winner(model) || state.loser(model) || state.draw(model)) {
        actions.reset({}, model.present);
    }
};

state.render = (model) => {
    state.representation(model);
    state.nextAction(model);
};